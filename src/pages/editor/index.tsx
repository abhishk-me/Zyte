import { Button, Popconfirm, Spin, message } from 'antd';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Download, LogOut, Maximize, Monitor, Smartphone } from 'react-feather';
import { useNavigate, useParams } from 'react-router-dom';
import { SegmentedTab } from '../../components/segmented';
import Postmate from 'postmate';
import { SectionList } from './section-list';
import { SectionEditor } from './element-editors/section';
import { PageDataType } from './types';
import { useImmer } from 'use-immer';
import { pageDataInitial } from './test-data';
import { ElementEditorPan } from './element-editor-pan';
import { getUrl } from '../../utils/common';
import { useMutation, useQuery } from '../../utils/api-hook';
import { editorApi } from '../../api/editor-api';
import { DateTime } from 'luxon';

enum FrameView {
  MOBILE = "MOBILE",
  DESKTOP = "DESKTOP",
  TABLET = "TABLET",
  WIDESCREEN = "WIDESCREEN"
}

enum LeftPanView {
  SECTIONS = "SECTIONS",
  CONTAINER = "CONTAINER"
}

export const PageEditor: FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const pageId = params.id;
  const [view, setView] = useState<FrameView>(FrameView.DESKTOP);
  const iFrameContainerRef = useRef<HTMLDivElement>(null);
  const handshakeRef = useRef<Postmate>();
  const iFrameChildRef = useRef<Postmate.ParentAPI>();
  const [editorState, setEditorState] = useImmer<{
    page: PageDataType,
    selectedElementId: number[], //each element has and ID - [ sectionIndex, columnIndex, elementIndex]
  }>({
    page: pageDataInitial,
    selectedElementId: []
  });

  // The page editor consists of three view pans - Left, middle, right.
  // LEFT PAN show list of sections. and when section is selected, it shows list of columns and elements inside. 
  // MIDDLE PAN renders the landing page.
  // RIGHT PAN shows the element editors to change data and styles.
  const [leftPanView, setLeftPanView] = useState<LeftPanView>(LeftPanView.SECTIONS);

  const { mutate: updatePageMutation, loading: updaetingPage } = useMutation(editorApi.updatePage, {
    onSuccess: ({ data }) => {
      message.success("Changes Saved!");
    },
  });

  // fetches page data and initiates handshake with the iframe.
  const { loading: fetchingPageData, query: getPageData } = useQuery(editorApi.getPage, {
    onSuccess: ({ data }) => {
      setEditorState((draft) => {
        draft.page = data;
      })
      if (!handshakeRef.current) {
        const handshake = new Postmate({
          container: iFrameContainerRef.current,
          url: getUrl(data.id || ""),
          name: 'my-iframe-name',
          classListArray: ["w-full", "h-full"]
        });
        handshakeRef.current = handshake;
        handshake.then(child => {
          iFrameChildRef.current = child
          // When landing page is mounted, it requests for the data.
          child.on('FETCH_DATA', () => {
            child.call("setData", data);
            iFrameChildRef.current?.call("toggleInspector", true)
          });
          // when an element is selected form the page, it highlights the element on the left pan and opens the style editor for the element on the right.
          child.on("SELECT_ELEMENT", (id: string) => {
            leftPanView !== LeftPanView.CONTAINER && setLeftPanView(LeftPanView.CONTAINER)
            setEditorState((draft) => {
              draft.selectedElementId = id.split("_").map(s => parseInt(s) || 0)
            })
          })
        });
      }
    }
  });

  useEffect(() => {
    if (pageId) {
      getPageData({
        queryParams: {
          id: pageId
        }
      })
    }
  }, [pageId]);

  // sends data to the landing page when changes are made
  useEffect(() => {
    iFrameChildRef.current?.call("setData", editorState.page);
  }, [editorState.page])

  const panelHidden = view === FrameView.WIDESCREEN;
  return (
    <>
      <div className='fixed inset-x-0 top-0 h-14 bg-[#18181a] text-white z-50 border-b border-b-light-10 flex flex-row'>
        <div className='flex items-center px-4 w-[260px]'>
          <Popconfirm
            placement='bottomRight'
            icon={null}
            title="Are your sure to exit the editor?"
            description={<span className='text-sm leading-tight'>Please save your changes before you leave the page</span>}
            onConfirm={() => navigate('/')}
            okText="Exit editor"
          >
            <Button
              type='primary'
              danger
              ghost
            >
              <p className='flex items-center'>
                <LogOut size={14} className=' rotate-180 -ml-1' />
                <span className='pl-2'>Exit editor</span>
              </p>
            </Button>
          </Popconfirm>
        </div>
        <div className='flex flex-1 justify-center items-center'>
          {/* Switch views between - mobile, desktop and wide screen preview */}
          <SegmentedTab
            bg='rgba(0,0,0,0.1)'
            value={view}
            onChange={(val) => {
              setView(val as FrameView);
              if (val === FrameView.WIDESCREEN) {
                iFrameChildRef.current?.call("toggleInspector", false)
              } else {
                iFrameChildRef.current?.call("toggleInspector", true)
              }
            }}
            options={[
              {
                value: FrameView.MOBILE,
                label: <p className='px-2'><Smartphone size={16} /></p>
              },
              {
                value: FrameView.DESKTOP,
                label: <p className='px-2'><Monitor size={16} /></p>
              },
              {
                value: FrameView.WIDESCREEN,
                label: <p className='px-2'><Maximize size={16} /></p>,
              }
            ]}
          />
        </div>
        <div className='flex items-center px-4 w-[260px] justify-end'>
          <Button className='mr-2' onClick={() => window.open(getUrl(editorState.page.id || ""), '_blank')}>
            Preview
          </Button>
          <Button
            type='primary'
            loading={updaetingPage}
            onClick={() => {
              updatePageMutation({
                pathParams: {
                  id: editorState.page.id || ""
                },
                requestBody: { ...editorState.page, updateAt: DateTime.now().toUTC().toISO() || "" },
              })
            }}
          >
            Save
          </Button>
        </div>
      </div>
      <div className='w-full h-screen flex flex-row relative'>
        <div className={`h-full pt-14 w-[260px] bg-[#18181a] z-30 transition-transform duration-300 flex flex-col ${panelHidden ? 'translate-x-[-260px]' : 'translate-x-0'}`} >
          {/* Display section list on the left pan */}
          {leftPanView === LeftPanView.SECTIONS &&
            <SectionList
              selectedElementId={editorState.selectedElementId}
              page={editorState.page}
              // On change is tiggered when you - add new section, delete a section, or rearrange the sections.
              onChange={(_page) => {
                setEditorState((draft) => {
                  draft.page = _page;
                });
              }}
              // when a section is selected. the left pan will display the columns and elements inside.
              onSelect={(id) => {
                iFrameChildRef.current?.call("focusElement", id.join("_"))
                setEditorState((draft) => {
                  draft.selectedElementId = id;
                });
                setLeftPanView(LeftPanView.CONTAINER)
              }}
            />}
          {/* When a section is selected, left pan shows section's content */}
          {leftPanView === LeftPanView.CONTAINER && !!editorState.selectedElementId.length &&
            <SectionEditor
              selectedElementId={editorState.selectedElementId}
              section={editorState.page.sections[editorState.selectedElementId[0]]}
              // onChange is triggered when you - add/remove/rearrange columns, add/remove/rearrange elements, change section styles
              onChange={(section, selectedElementId) => {
                iFrameChildRef.current?.call("focusElement", selectedElementId.join("_"))
                setEditorState((draft) => {
                  draft.selectedElementId = selectedElementId;
                  draft.page.sections[editorState.selectedElementId[0]] = section;
                });
              }}
              // When you go back to section list
              onExit={() => {
                setLeftPanView(LeftPanView.SECTIONS);
                setEditorState((draft) => {
                  draft.selectedElementId = [];
                });
              }}
            />
          }
        </div >
        <div className='flex flex-col flex-1' ></div>
        <div className={`h-full w-[260px] pt-14 pb-20 bg-[#18181a] text-white z-30 transition-transform duration-300 overflow-y-auto scrollbar-hide text-sm ${panelHidden ? 'translate-x-[260px]' : 'translate-x-0'}`}>
          {/* Element editor appears on the right pan when an element is selected */}
          <ElementEditorPan
            page={editorState.page}
            elementId={editorState.selectedElementId}
            // when you make any changes to the element. it saves the data.
            onChange={(page) => {
              setEditorState((draft) => {
                draft.page = page;
              });
            }}
          />
        </div>
        <div className={`inset-y-0 absolute z-[10] bg-white transition-all duration-300  ${panelHidden ? 'inset-x-0' : 'inset-x-[260px]'}`}>
          <div
            className={`h-full px-1 overflow-x-auto relative z-0 ${view === FrameView.MOBILE ? 'pt-16 pb-2' : 'pt-14'}`} style={{
              backgroundColor: "#28282b",
              opacity: 1
            }}
          >
            {/* Iframe element. renders the landing page */}
            <div
              ref={iFrameContainerRef}
              className={` bg-white
                ${fetchingPageData && 'invisible'}
                ${view === FrameView.DESKTOP && 'w-full '} 
                ${view === FrameView.TABLET && 'w-[800px]'}
                ${view === FrameView.MOBILE && 'aspect-[0.48]'}
                mx-auto h-full transition-width ${view === FrameView.MOBILE ? 'rounded-xl overflow-hidden' : ''}`
              }
            ></div>
            {fetchingPageData && <div className='absolute inset-0 flex items-center justify-center'>
              <div className='h-12 w-12 rounded-full flex items-center justify-center bg-white'>
                <Spin style={{ lineHeight: 0 }} />
              </div>
            </div>}
          </div>
        </div>
      </div>
    </>
  )
}