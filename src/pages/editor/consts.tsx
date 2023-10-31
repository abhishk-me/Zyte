import { MenuProps } from 'antd';
import { ElementProps, Elements, LayoutType, PageSection } from './types';
import { Image, MousePointer, Square, Type } from 'react-feather';
import { ReactNode } from 'react';


export const ElementIconMap = {
  [Elements.TEXT]: <Type size={12} strokeWidth={3} className='opacity-60' />,
  [Elements.IMAGE]: <Image size={12} strokeWidth={3} className='opacity-60' />,
  [Elements.BUTTONS]: <MousePointer size={12} strokeWidth={3} className='opacity-60' />,
  [Elements.EMPTY_SPACE]: <Square size={12} strokeWidth={3} className='opacity-60' />,
}

export const addElementOptions: MenuProps['items'] = [
  {
    key: Elements.TEXT,
    label: <p className='flex items-center py-0.5'>
      {ElementIconMap[Elements.TEXT]}
      <span className='ml-1.5 text-sm font-medium'>Text</span>
    </p>
  },
  {
    key: Elements.IMAGE,
    label: <p className='flex items-center py-0.5'>
      {ElementIconMap[Elements.IMAGE]}
      <span className='ml-1.5 text-sm font-medium'>Image</span>
    </p>
  },
  {
    key: Elements.BUTTONS,
    label: <p className='flex items-center py-0.5'>
      {ElementIconMap[Elements.BUTTONS]}
      <span className='ml-1.5 text-sm font-medium'>Buttons</span>
    </p>
  },
  {
    key: Elements.EMPTY_SPACE,
    label: <p className='flex items-center py-0.5'>
      {ElementIconMap[Elements.EMPTY_SPACE]}
      <span className='ml-1.5 text-sm font-medium'>Empty Space</span>
    </p>
  },
];

export const widgetDefaultConsts: { [key in Elements]: ElementProps } = {
  [Elements.TEXT]: {
    type: "Base",
    text: "Enter text here",
    styles: {}
  },
  [Elements.IMAGE]: {
    type: "Base",
    styles: {},
  },
  [Elements.BUTTONS]: {
    type: "Button",
    gap: 14,
    buttons: [{
      text: "Button"
    }],
  },
  [Elements.EMPTY_SPACE]: {
    type: "Base",
    styles: {}
  },
}

export interface SectionTemplate {
  name: string;
  thumb: ReactNode;
  section: PageSection
}

export const sectionTemplates: SectionTemplate[] = [
  {
    name: "Image and text",
    thumb: <svg width="100%" viewBox="0 0 325 188" className='opacity-60'>
      <g id="Group_1" data-name="Group 1" transform="translate(-68 -66)">
        <g id="Rectangle_724" data-name="Rectangle 724" transform="translate(70 69)" fill="none" stroke="#fff" stroke-width="3">
          <rect width="321" height="182" rx="32" stroke="none" />
          <rect x="1.5" y="1.5" width="318" height="179" rx="30.5" fill="none" />
        </g>
        <g id="Rectangle_725" data-name="Rectangle 725" transform="translate(230 69)" fill="rgba(255,255,255,0.26)" stroke="#fff" stroke-width="3">
          <path d="M0,0H129a32,32,0,0,1,32,32V150a32,32,0,0,1-32,32H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" stroke="none" />
          <path d="M1.5,1.5H129A30.5,30.5,0,0,1,159.5,32V150A30.5,30.5,0,0,1,129,180.5H1.5a0,0,0,0,1,0,0V1.5A0,0,0,0,1,1.5,1.5Z" fill="none" />
        </g>
        <path id="Icon_awesome-image" data-name="Icon awesome-image" d="M56.81,51.515H5.877A5.877,5.877,0,0,1,0,45.638V10.377A5.877,5.877,0,0,1,5.877,4.5H56.81a5.877,5.877,0,0,1,5.877,5.877V45.638A5.877,5.877,0,0,1,56.81,51.515Zm-43.1-40.159a6.856,6.856,0,1,0,6.856,6.856A6.856,6.856,0,0,0,13.713,11.356ZM7.836,43.679H54.851V29.967L44.136,19.252a1.469,1.469,0,0,0-2.078,0L25.466,35.843l-6.8-6.8a1.469,1.469,0,0,0-2.078,0L7.836,37.8Z" transform="translate(279.157 131.992)" fill="#fff" />
        <rect id="Rectangle_726" data-name="Rectangle 726" width="89" height="10" rx="5" transform="translate(102 118)" fill="#fff" />
        <rect id="Rectangle_727" data-name="Rectangle 727" width="56" height="10" rx="5" transform="translate(102 134)" fill="#fff" />
        <rect id="Rectangle_728" data-name="Rectangle 728" width="89" height="6" rx="3" transform="translate(102 155)" fill="#fff" opacity="0.481" />
        <rect id="Rectangle_729" data-name="Rectangle 729" width="67" height="6" rx="3" transform="translate(102 167)" fill="#fff" opacity="0.481" />
        <rect id="Rectangle_730" data-name="Rectangle 730" width="38" height="12" rx="2" transform="translate(102 192)" fill="#fff" />
        <rect id="Rectangle_732" data-name="Rectangle 732" width="325" height="188" transform="translate(68 66)" fill="none" />
      </g>
    </svg>,
    section: {
      "layout": {
        "styles": {},
        "displayName": "Image and text",
        "children": [
          {
            "props": {
              "width": 1
            },
            "styles": {
              "borderColor": "#000",
              "borderWidth": [
                0,
                0,
                0,
                0
              ],
              "borderStyle": "solid",
              "background": "#000000",
              "padding": [
                20,
                20,
                20,
                20
              ],
              "justify": "center",
              "maxWidth": 3,
              "horizontalAlign": "center"
            },
            "children": [
              {
                "name": Elements.TEXT,
                "props": {
                  "type": "Base",
                  "text": "Lorem ipsum dolor sit amet",
                  "styles": {
                    "color": "#ffffff",
                    "padding": [
                      4,
                      0,
                      12,
                      0
                    ],
                    "fontSize": 50,
                    "textAlign": "left",
                    "fontWeight": 500,
                    "fontSizeMobile": 31,
                    "borderColor": "#000",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "borderStyle": "solid"
                  }
                },
                "displayName": "Text Block"
              },
              {
                "name": Elements.TEXT,
                "props": {
                  "type": "Base",
                  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
                  "styles": {
                    "color": "#ffffff",
                    "padding": [
                      20,
                      0,
                      30,
                      0
                    ],
                    "fontSize": 16,
                    "borderColor": "#000",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "borderStyle": "solid"
                  }
                },
                "displayName": "Text Block"
              },
              {
                "name": Elements.EMPTY_SPACE,
                "displayName": "Empty Space",
                "props": {
                  "type": "Base",
                  "styles": {
                    "height": 30,
                    "heightType": "PIXELS"
                  }
                }
              },
              {
                "name": Elements.BUTTONS,
                "props": {
                  "type": "Button",
                  "gap": 4,
                  "buttons": [
                    {
                      "text": "Shop Now",
                      "borderColor": "#000",
                      "borderWidth": [
                        0,
                        0,
                        0,
                        0
                      ],
                      "borderStyle": "solid",
                      "background": "#ffdba8",
                      "color": "#000000",
                      "textAlign": "center",
                      "width": 180,
                      "widthType": "PIXELS",
                      "padding": [
                        14,
                        12,
                        14,
                        12
                      ],
                      "fontSize": 16,
                      "fontWeight": 500
                    }
                  ]
                },
                "displayName": "Buttons"
              }
            ]
          },
          {
            "props": {
              "width": 1
            },
            "styles": {
              "borderColor": "#000",
              "borderWidth": [
                0,
                0,
                0,
                0
              ],
              "borderStyle": "solid"
            },
            "children": [
              {
                "name": Elements.IMAGE,
                "props": {
                  "type": "Base",
                  "image": {
                    "id": "https://tusd.tusdemo.net/files/f305226b3450dd4a676b97010862a75d+VsEut0HQQ.BO17Pjr1V7z2TdUTGA0XohZYvEACF.7SMIJCAy3WostNh1Hjf5Xy1VkMDLJjGCYLZCWSWc5MTuxtf8UEBTsd8zriFKnL9Eh.3Jxd3xjWXf2fN7LR79XNlp",
                    "url": "https://tusd.tusdemo.net/files/f305226b3450dd4a676b97010862a75d+VsEut0HQQ.BO17Pjr1V7z2TdUTGA0XohZYvEACF.7SMIJCAy3WostNh1Hjf5Xy1VkMDLJjGCYLZCWSWc5MTuxtf8UEBTsd8zriFKnL9Eh.3Jxd3xjWXf2fN7LR79XNlp",
                    "meta": {}
                  },
                  "styles": {
                    "width": 100,
                    "widthType": "FULL",
                    "borderColor": "#000",
                    "borderStyle": "solid",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "height": 100,
                    "heightType": "FULL"
                  }
                },
                "displayName": "Image"
              }
            ]
          }
        ],
        "props": {
          "type": LayoutType.COLUMNS
        }
      }
    }
  },
  {
    name: "Image and text",
    thumb: <svg width="100%" viewBox="0 0 325 188" className='opacity-60'>
      <g id="Rectangle_724" data-name="Rectangle 724" transform="translate(2 3)" fill="none" stroke="#fff" stroke-width="3">
        <rect width="321" height="182" rx="32" stroke="none" />
        <rect x="1.5" y="1.5" width="318" height="179" rx="30.5" fill="none" />
      </g>
      <g id="Rectangle_725" data-name="Rectangle 725" transform="translate(2 3)" fill="rgba(255,255,255,0.26)" stroke="#fff" stroke-width="3">
        <path d="M32,0H161a0,0,0,0,1,0,0V182a0,0,0,0,1,0,0H32A32,32,0,0,1,0,150V32A32,32,0,0,1,32,0Z" stroke="none" />
        <path d="M32,1.5H159.5a0,0,0,0,1,0,0v179a0,0,0,0,1,0,0H32A30.5,30.5,0,0,1,1.5,150V32A30.5,30.5,0,0,1,32,1.5Z" fill="none" />
      </g>
      <path id="Icon_awesome-image" data-name="Icon awesome-image" d="M5.877,51.515H56.81a5.877,5.877,0,0,0,5.877-5.877V10.377A5.877,5.877,0,0,0,56.81,4.5H5.877A5.877,5.877,0,0,0,0,10.377V45.638A5.877,5.877,0,0,0,5.877,51.515Zm43.1-40.159a6.856,6.856,0,1,1-6.856,6.856A6.856,6.856,0,0,1,48.974,11.356Zm5.877,32.323H7.836V29.967L18.551,19.252a1.469,1.469,0,0,1,2.078,0L37.22,35.843l6.8-6.8a1.469,1.469,0,0,1,2.078,0L54.851,37.8Z" transform="translate(51.156 65.992)" fill="#fff" />
      <rect id="Rectangle_726" data-name="Rectangle 726" width="89" height="10" rx="5" transform="translate(197 51)" fill="#fff" />
      <rect id="Rectangle_727" data-name="Rectangle 727" width="56" height="10" rx="5" transform="translate(197 67)" fill="#fff" />
      <rect id="Rectangle_728" data-name="Rectangle 728" width="89" height="6" rx="3" transform="translate(197 88)" fill="#fff" opacity="0.481" />
      <rect id="Rectangle_729" data-name="Rectangle 729" width="67" height="6" rx="3" transform="translate(197 100)" fill="#fff" opacity="0.481" />
      <rect id="Rectangle_730" data-name="Rectangle 730" width="38" height="12" rx="2" transform="translate(197 125)" fill="#fff" />
      <rect id="Rectangle_732" data-name="Rectangle 732" width="325" height="188" fill="none" />
    </svg>,
    section: {
      "layout": {
        "styles": {},
        "displayName": "Image and text",
        "children": [
          {
            "props": {
              "width": 1
            },
            "styles": {
              "borderColor": "#000",
              "borderWidth": [
                0,
                0,
                0,
                0
              ],
              "borderStyle": "solid"
            },
            "children": [
              {
                "name": Elements.IMAGE,
                "props": {
                  "type": "Base",
                  "image": {
                    "id": "https://tusd.tusdemo.net/files/f305226b3450dd4a676b97010862a75d+VsEut0HQQ.BO17Pjr1V7z2TdUTGA0XohZYvEACF.7SMIJCAy3WostNh1Hjf5Xy1VkMDLJjGCYLZCWSWc5MTuxtf8UEBTsd8zriFKnL9Eh.3Jxd3xjWXf2fN7LR79XNlp",
                    "url": "https://tusd.tusdemo.net/files/f305226b3450dd4a676b97010862a75d+VsEut0HQQ.BO17Pjr1V7z2TdUTGA0XohZYvEACF.7SMIJCAy3WostNh1Hjf5Xy1VkMDLJjGCYLZCWSWc5MTuxtf8UEBTsd8zriFKnL9Eh.3Jxd3xjWXf2fN7LR79XNlp",
                    "meta": {}
                  },
                  "styles": {
                    "width": 100,
                    "widthType": "FULL",
                    "borderColor": "#000",
                    "borderStyle": "solid",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "height": 100,
                    "heightType": "FULL"
                  }
                },
                "displayName": "Image"
              }
            ]
          },
          {
            "props": {
              "width": 1
            },
            "styles": {
              "borderColor": "#000",
              "borderWidth": [
                0,
                0,
                0,
                0
              ],
              "borderStyle": "solid",
              "background": "#000000",
              "padding": [
                30,
                30,
                30,
                30
              ],
              "justify": "center",
              "maxWidth": 3,
              "horizontalAlign": "center"
            },
            "children": [
              {
                "name": Elements.TEXT,
                "props": {
                  "type": "Base",
                  "text": "Lorem ipsum dolor sit amet",
                  "styles": {
                    "color": "#ffffff",
                    "padding": [
                      4,
                      0,
                      12,
                      0
                    ],
                    "fontSize": 50,
                    "textAlign": "left",
                    "fontWeight": 500,
                    "fontSizeMobile": 31,
                    "borderColor": "#000",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "borderStyle": "solid"
                  }
                },
                "displayName": "Text Block"
              },
              {
                "name": Elements.TEXT,
                "props": {
                  "type": "Base",
                  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
                  "styles": {
                    "color": "#ffffff",
                    "padding": [
                      20,
                      0,
                      30,
                      0
                    ],
                    "fontSize": 16,
                    "borderColor": "#000",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "borderStyle": "solid"
                  }
                },
                "displayName": "Text Block"
              },
              {
                "name": Elements.EMPTY_SPACE,
                "displayName": "Empty Space",
                "props": {
                  "type": "Base",
                  "styles": {
                    "height": 30,
                    "heightType": "PIXELS"
                  }
                }
              },
              {
                "name": Elements.BUTTONS,
                "props": {
                  "type": "Button",
                  "gap": 4,
                  "buttons": [
                    {
                      "text": "Shop Now",
                      "borderColor": "#000",
                      "borderWidth": [
                        0,
                        0,
                        0,
                        0
                      ],
                      "borderStyle": "solid",
                      "background": "#ffdba8",
                      "color": "#000000",
                      "textAlign": "center",
                      "width": 180,
                      "widthType": "PIXELS",
                      "padding": [
                        14,
                        12,
                        14,
                        12
                      ],
                      "fontSize": 16,
                      "fontWeight": 500
                    }
                  ]
                },
                "displayName": "Buttons"
              }
            ]
          }
        ],
        "props": {
          "type": LayoutType.COLUMNS
        }
      }
    }
  },
  {
    name: "Text over image",
    thumb: <svg width="100%" viewBox="0 0 325 188" className='opacity-60'>
      <g id="Group_3" data-name="Group 3" transform="translate(-68 -66)">
        <rect id="Rectangle_734" data-name="Rectangle 734" width="325" height="188" transform="translate(68 66)" fill="none" />
        <g id="Rectangle_724" data-name="Rectangle 724" transform="translate(70 69)" fill="none" stroke="#fff" stroke-width="3">
          <rect width="321" height="182" rx="32" stroke="none" />
          <rect x="1.5" y="1.5" width="318" height="179" rx="30.5" fill="none" />
        </g>
        <g id="Rectangle_725" data-name="Rectangle 725" transform="translate(70 69)" fill="rgba(255,255,255,0.26)" stroke="#fff" stroke-width="3">
          <rect width="321" height="182" rx="32" stroke="none" />
          <rect x="1.5" y="1.5" width="318" height="179" rx="30.5" fill="none" />
        </g>
        <path id="Icon_awesome-image" data-name="Icon awesome-image" d="M56.81,51.515H5.877A5.877,5.877,0,0,1,0,45.638V10.377A5.877,5.877,0,0,1,5.877,4.5H56.81a5.877,5.877,0,0,1,5.877,5.877V45.638A5.877,5.877,0,0,1,56.81,51.515Zm-43.1-40.159a6.856,6.856,0,1,0,6.856,6.856A6.856,6.856,0,0,0,13.713,11.356ZM7.836,43.679H54.851V29.967L44.136,19.252a1.469,1.469,0,0,0-2.078,0L25.466,35.843l-6.8-6.8a1.469,1.469,0,0,0-2.078,0L7.836,37.8Z" transform="translate(279.157 131.992)" fill="#fff" />
        <rect id="Rectangle_726" data-name="Rectangle 726" width="89" height="10" rx="5" transform="translate(102 118)" fill="#fff" />
        <rect id="Rectangle_727" data-name="Rectangle 727" width="56" height="10" rx="5" transform="translate(102 134)" fill="#fff" />
        <rect id="Rectangle_728" data-name="Rectangle 728" width="89" height="6" rx="3" transform="translate(102 155)" fill="#fff" opacity="0.481" />
        <rect id="Rectangle_729" data-name="Rectangle 729" width="67" height="6" rx="3" transform="translate(102 167)" fill="#fff" opacity="0.481" />
        <rect id="Rectangle_730" data-name="Rectangle 730" width="38" height="12" rx="2" transform="translate(102 192)" fill="#fff" />
      </g>
    </svg>,
    section: {
      "layout": {
        "styles": {},
        "displayName": "Text over image",
        "children": [
          {
            "props": {
              "width": 1,
              "backgroundImage": {
                "id": "https://tusd.tusdemo.net/files/fd62c177a4c05df1172ee575b936c570+_QbL7lQB_r468kmWMDU1.Tzy0wmN9pGDpvaaHP47mfGVB5U4Et7jHtukWHPdNggVgyMTCIcJUkhmrKYkL2y4ZJEmSBUDyNDg_t9_1GK548tZuIiguDLo9RbMe3iHtEa4",
                "url": "https://tusd.tusdemo.net/files/fd62c177a4c05df1172ee575b936c570+_QbL7lQB_r468kmWMDU1.Tzy0wmN9pGDpvaaHP47mfGVB5U4Et7jHtukWHPdNggVgyMTCIcJUkhmrKYkL2y4ZJEmSBUDyNDg_t9_1GK548tZuIiguDLo9RbMe3iHtEa4",
                "meta": {}
              }
            },
            "styles": {
              "borderColor": "#000",
              "borderWidth": [
                0,
                0,
                0,
                0
              ],
              "borderStyle": "solid",
              "maxWidth": 5,
              "horizontalAlign": "center",
              "padding": [
                50,
                20,
                50,
                20
              ],
              "background": "#521e1e",
              "opacity": 1,
              "justify": "flex-start",
              "overlayOpacity": 0.66
            },
            "children": [
              {
                "name": Elements.EMPTY_SPACE,
                "displayName": "Empty Space",
                "props": {
                  "type": "Base",
                  "styles": {
                    "height": 100,
                    "heightType": "PIXELS"
                  }
                }
              },
              {
                "name": Elements.TEXT,
                "props": {
                  "type": "Base",
                  "text": "Lorem ipsum dolor sit amet",
                  "styles": {
                    "color": "#ffffff",
                    "padding": [
                      30,
                      0,
                      30,
                      0
                    ],
                    "fontSize": 52,
                    "textAlign": "left",
                    "fontWeight": 500,
                    "fontSizeMobile": 31,
                    "borderColor": "#000",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "borderStyle": "solid",
                    "background": "",
                    "width": 100,
                    "widthType": "FULL"
                  }
                },
                "displayName": "Text Block"
              },
              {
                "name": Elements.TEXT,
                "props": {
                  "type": "Base",
                  "text": "Fill your room with refreshing energy with our wide range of premium flooring",
                  "styles": {
                    "color": "#ffffff",
                    "padding": [
                      2,
                      0,
                      48,
                      0
                    ],
                    "fontSize": 16,
                    "textAlign": "left",
                    "borderColor": "#000",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "borderStyle": "solid"
                  }
                },
                "displayName": "Text Block"
              },
              {
                "name": Elements.BUTTONS,
                "displayName": "Buttons",
                "props": {
                  "type": "Button",
                  "gap": 14,
                  "buttons": [
                    {
                      "text": "Button",
                      "borderColor": "#000",
                      "borderWidth": [
                        0,
                        0,
                        0,
                        0
                      ],
                      "borderStyle": "solid",
                      "background": "#ffffff",
                      "color": "#000000",
                      "fontWeight": 700,
                      "width": 220,
                      "widthType": "PIXELS",
                      "textAlign": "center",
                      "padding": [
                        12,
                        12,
                        12,
                        12
                      ],
                      "fontSize": 17
                    }
                  ],
                  "align": "left"
                }
              },
              {
                "name": Elements.EMPTY_SPACE,
                "displayName": "Empty Space",
                "props": {
                  "type": "Base",
                  "styles": {
                    "height": 130,
                    "heightType": "PIXELS"
                  }
                }
              }
            ]
          }
        ],
        "props": {
          "type": LayoutType.DEFAULT
        }
      }
    }
  },
  {
    name: "Text below image",
    thumb: <svg width="100%" viewBox="0 0 325 188" className='opacity-60'>
      <g id="Group_2" data-name="Group 2" transform="translate(-69 -66)">
        <rect id="Rectangle_733" data-name="Rectangle 733" width="325" height="188" transform="translate(69 66)" fill="none" />
        <g id="Rectangle_724" data-name="Rectangle 724" transform="translate(117 69)" fill="none" stroke="#fff" stroke-width="3">
          <rect width="227" height="182" rx="32" stroke="none" />
          <rect x="1.5" y="1.5" width="224" height="179" rx="30.5" fill="none" />
        </g>
        <g id="Rectangle_725" data-name="Rectangle 725" transform="translate(117 69)" fill="rgba(255,255,255,0.26)" stroke="#fff" stroke-width="3">
          <path d="M32,0H195a32,32,0,0,1,32,32V91a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V32A32,32,0,0,1,32,0Z" stroke="none" />
          <path d="M32,1.5H195A30.5,30.5,0,0,1,225.5,32V89.5a0,0,0,0,1,0,0H1.5a0,0,0,0,1,0,0V32A30.5,30.5,0,0,1,32,1.5Z" fill="none" />
        </g>
        <path id="Icon_awesome-image" data-name="Icon awesome-image" d="M56.81,51.515H5.877A5.877,5.877,0,0,1,0,45.638V10.377A5.877,5.877,0,0,1,5.877,4.5H56.81a5.877,5.877,0,0,1,5.877,5.877V45.638A5.877,5.877,0,0,1,56.81,51.515Zm-43.1-40.159a6.856,6.856,0,1,0,6.856,6.856A6.856,6.856,0,0,0,13.713,11.356ZM7.836,43.679H54.851V29.967L44.136,19.252a1.469,1.469,0,0,0-2.078,0L25.466,35.843l-6.8-6.8a1.469,1.469,0,0,0-2.078,0L7.836,37.8Z" transform="translate(199.157 86.492)" fill="#fff" />
        <rect id="Rectangle_726" data-name="Rectangle 726" width="55" height="8" rx="4" transform="translate(203 175)" fill="#fff" />
        <rect id="Rectangle_728" data-name="Rectangle 728" width="109" height="4" rx="2" transform="translate(176 192)" fill="#fff" opacity="0.481" />
        <rect id="Rectangle_729" data-name="Rectangle 729" width="79" height="4" rx="2" transform="translate(191 200)" fill="#fff" opacity="0.481" />
        <rect id="Rectangle_730" data-name="Rectangle 730" width="38" height="12" rx="2" transform="translate(212 218)" fill="#fff" />
      </g>
    </svg>,
    section: {
      "layout": {
        "styles": {},
        "displayName": "Text below image",
        "children": [
          {
            "props": {
              "width": 1
            },
            "styles": {
              "borderColor": "#000",
              "borderWidth": [
                0,
                0,
                0,
                0
              ],
              "borderStyle": "solid",
              "maxWidth": 6,
              "horizontalAlign": "center",
              "padding": [
                50,
                50,
                50,
                50
              ],
              "background": "#521e1e",
              "opacity": 1,
              "justify": "flex-start",
              "overlayOpacity": 0.66
            },
            "children": [
              {
                "name": Elements.IMAGE,
                "props": {
                  "type": "Base",
                  "image": {
                    "id": "https://tusd.tusdemo.net/files/fd62c177a4c05df1172ee575b936c570+_QbL7lQB_r468kmWMDU1.Tzy0wmN9pGDpvaaHP47mfGVB5U4Et7jHtukWHPdNggVgyMTCIcJUkhmrKYkL2y4ZJEmSBUDyNDg_t9_1GK548tZuIiguDLo9RbMe3iHtEa4",
                    "url": "https://tusd.tusdemo.net/files/fd62c177a4c05df1172ee575b936c570+_QbL7lQB_r468kmWMDU1.Tzy0wmN9pGDpvaaHP47mfGVB5U4Et7jHtukWHPdNggVgyMTCIcJUkhmrKYkL2y4ZJEmSBUDyNDg_t9_1GK548tZuIiguDLo9RbMe3iHtEa4",
                    "meta": {}
                  },
                  "styles": {
                    "width": 100,
                    "widthType": "FULL",
                    "borderColor": "#000",
                    "borderStyle": "solid",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "radius": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "height": 1,
                    "heightType": "AUTO"
                  }
                },
                "displayName": "Image"
              },
              {
                "name": Elements.TEXT,
                "props": {
                  "type": "Base",
                  "text": "Refreshing Interiors",
                  "styles": {
                    "color": "#ffffff",
                    "padding": [
                      30,
                      0,
                      0,
                      0
                    ],
                    "fontSize": 50,
                    "textAlign": "center",
                    "fontWeight": 500,
                    "fontSizeMobile": 31,
                    "borderColor": "#000",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "borderStyle": "solid",
                    "background": "",
                    "width": 100,
                    "widthType": "FULL"
                  }
                },
                "displayName": "Text Block"
              },
              {
                "name": Elements.TEXT,
                "props": {
                  "type": "Base",
                  "text": "Fill your room with refreshing energy with our wide range of premium flooring",
                  "styles": {
                    "color": "#ffffff",
                    "padding": [
                      0,
                      0,
                      24,
                      0
                    ],
                    "fontSize": 16,
                    "textAlign": "center",
                    "borderColor": "#000",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "borderStyle": "solid"
                  }
                },
                "displayName": "Text Block"
              },
              {
                "name": Elements.BUTTONS,
                "displayName": "Buttons",
                "props": {
                  "type": "Button",
                  "gap": 14,
                  "buttons": [
                    {
                      "text": "Button",
                      "borderColor": "#000",
                      "borderWidth": [
                        0,
                        0,
                        0,
                        0
                      ],
                      "borderStyle": "solid",
                      "background": "#ffffff",
                      "color": "#000000",
                      "fontWeight": 700,
                      "width": 220,
                      "widthType": "PIXELS",
                      "textAlign": "center",
                      "padding": [
                        12,
                        12,
                        12,
                        12
                      ],
                      "fontSize": 17
                    }
                  ],
                  "align": "center"
                }
              }
            ]
          }
        ],
        "props": {
          "type": LayoutType.DEFAULT
        }
      }
    }
  },
  {
    name: "Columns",
    thumb: <svg width="100%" viewBox="0 0 325 188" className='opacity-60'>
      <g id="Group_4" data-name="Group 4" transform="translate(-68 -66)">
        <rect id="Rectangle_734" data-name="Rectangle 734" width="325" height="188" transform="translate(68 66)" fill="none" />
        <g id="Rectangle_724" data-name="Rectangle 724" transform="translate(178 69)" fill="rgba(255,255,255,0.26)" stroke="#fff" stroke-width="3">
          <rect width="105" height="182" rx="24" stroke="none" />
          <rect x="1.5" y="1.5" width="102" height="179" rx="22.5" fill="none" />
        </g>
        <g id="Rectangle_725" data-name="Rectangle 725" transform="translate(70 69)" fill="none" stroke="#fff" stroke-width="3">
          <path d="M32,0H78a24,24,0,0,1,24,24V158a24,24,0,0,1-24,24H32A32,32,0,0,1,0,150V32A32,32,0,0,1,32,0Z" stroke="none" />
          <path d="M32,1.5H78A22.5,22.5,0,0,1,100.5,24V158A22.5,22.5,0,0,1,78,180.5H32A30.5,30.5,0,0,1,1.5,150V32A30.5,30.5,0,0,1,32,1.5Z" fill="none" />
        </g>
        <path id="Icon_awesome-image" data-name="Icon awesome-image" d="M48.955,45.014H5.064A5.064,5.064,0,0,1,0,39.95V9.564A5.064,5.064,0,0,1,5.064,4.5h43.89a5.064,5.064,0,0,1,5.064,5.064V39.95A5.064,5.064,0,0,1,48.955,45.014ZM11.817,10.408a5.908,5.908,0,1,0,5.908,5.908A5.908,5.908,0,0,0,11.817,10.408ZM6.752,38.262H47.267V26.445l-9.233-9.233a1.266,1.266,0,0,0-1.791,0l-14.3,14.3-5.857-5.857a1.266,1.266,0,0,0-1.791,0L6.752,33.2Z" transform="translate(203.49 134.243)" fill="#fff" />
        <rect id="Rectangle_726" data-name="Rectangle 726" width="51" height="10" rx="5" transform="translate(91 115)" fill="#fff" />
        <rect id="Rectangle_728" data-name="Rectangle 728" width="56" height="6" rx="3" transform="translate(91 153)" fill="#fff" opacity="0.481" />
        <rect id="Rectangle_729" data-name="Rectangle 729" width="42" height="6" rx="3" transform="translate(91 165)" fill="#fff" opacity="0.481" />
        <rect id="Rectangle_730" data-name="Rectangle 730" width="38" height="12" rx="2" transform="translate(91 193)" fill="#fff" />
        <g id="Rectangle_735" data-name="Rectangle 735" transform="translate(290 69)" fill="none" stroke="#fff" stroke-width="3">
          <path d="M24,0H69a32,32,0,0,1,32,32V150a32,32,0,0,1-32,32H24A24,24,0,0,1,0,158V24A24,24,0,0,1,24,0Z" stroke="none" />
          <path d="M24,1.5H69A30.5,30.5,0,0,1,99.5,32V150A30.5,30.5,0,0,1,69,180.5H24A22.5,22.5,0,0,1,1.5,158V24A22.5,22.5,0,0,1,24,1.5Z" fill="none" />
        </g>
        <rect id="Rectangle_736" data-name="Rectangle 736" width="56" height="6" rx="3" transform="translate(91 141)" fill="#fff" opacity="0.481" />
        <rect id="Rectangle_737" data-name="Rectangle 737" width="51" height="10" rx="5" transform="translate(313 115)" fill="#fff" />
        <rect id="Rectangle_738" data-name="Rectangle 738" width="56" height="6" rx="3" transform="translate(313 153)" fill="#fff" opacity="0.481" />
        <rect id="Rectangle_739" data-name="Rectangle 739" width="42" height="6" rx="3" transform="translate(313 165)" fill="#fff" opacity="0.481" />
        <rect id="Rectangle_740" data-name="Rectangle 740" width="56" height="6" rx="3" transform="translate(313 141)" fill="#fff" opacity="0.481" />
      </g>
    </svg>,
    section: {
      "layout": {
        "styles": {},
        "displayName": "Columns",
        "children": [
          {
            "props": {
              "width": 1
            },
            "styles": {
              "borderColor": "#000",
              "borderWidth": [
                0,
                0,
                0,
                0
              ],
              "borderStyle": "solid",
              "background": "#000000",
              "padding": [
                50,
                30,
                50,
                30
              ],
              "justify": "flex-start",
              "maxWidth": 1,
              "horizontalAlign": "center"
            },
            "children": [
              {
                "name": Elements.TEXT,
                "props": {
                  "type": "Base",
                  "text": "Lorem ipsum dolor sit amet",
                  "styles": {
                    "color": "#ffffff",
                    "padding": [
                      12,
                      0,
                      12,
                      0
                    ],
                    "fontSize": 50,
                    "textAlign": "left",
                    "fontWeight": 500,
                    "fontSizeMobile": 31,
                    "borderColor": "#000",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "borderStyle": "solid"
                  }
                },
                "displayName": "Text Block"
              },
              {
                "name": Elements.TEXT,
                "props": {
                  "type": "Base",
                  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
                  "styles": {
                    "color": "#ffffff",
                    "padding": [
                      20,
                      0,
                      30,
                      0
                    ],
                    "fontSize": 16,
                    "borderColor": "#000",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "borderStyle": "solid"
                  }
                },
                "displayName": "Text Block"
              },
              {
                "name": Elements.EMPTY_SPACE,
                "displayName": "Empty Space",
                "props": {
                  "type": "Base",
                  "styles": {
                    "height": 30,
                    "heightType": "PIXELS"
                  }
                }
              },
              {
                "name": Elements.BUTTONS,
                "props": {
                  "type": "Button",
                  "gap": 4,
                  "buttons": [
                    {
                      "text": "Shop Now",
                      "borderColor": "#000",
                      "borderWidth": [
                        0,
                        0,
                        0,
                        0
                      ],
                      "borderStyle": "solid",
                      "background": "#ffdba8",
                      "color": "#000000",
                      "textAlign": "center",
                      "width": 180,
                      "widthType": "PIXELS",
                      "padding": [
                        14,
                        12,
                        14,
                        12
                      ],
                      "fontSize": 16,
                      "fontWeight": 500
                    }
                  ]
                },
                "displayName": "Buttons"
              }
            ]
          },
          {
            "props": {
              "width": 1
            },
            "styles": {
              "borderColor": "#000",
              "borderWidth": [
                0,
                0,
                0,
                0
              ],
              "borderStyle": "solid"
            },
            "children": [
              {
                "name": Elements.IMAGE,
                "props": {
                  "type": "Base",
                  "image": {
                    "id": "https://tusd.tusdemo.net/files/f305226b3450dd4a676b97010862a75d+VsEut0HQQ.BO17Pjr1V7z2TdUTGA0XohZYvEACF.7SMIJCAy3WostNh1Hjf5Xy1VkMDLJjGCYLZCWSWc5MTuxtf8UEBTsd8zriFKnL9Eh.3Jxd3xjWXf2fN7LR79XNlp",
                    "url": "https://tusd.tusdemo.net/files/f305226b3450dd4a676b97010862a75d+VsEut0HQQ.BO17Pjr1V7z2TdUTGA0XohZYvEACF.7SMIJCAy3WostNh1Hjf5Xy1VkMDLJjGCYLZCWSWc5MTuxtf8UEBTsd8zriFKnL9Eh.3Jxd3xjWXf2fN7LR79XNlp",
                    "meta": {}
                  },
                  "styles": {
                    "width": 100,
                    "widthType": "FULL",
                    "borderColor": "#000",
                    "borderStyle": "solid",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "height": 100,
                    "heightType": "FULL"
                  }
                },
                "displayName": "Image"
              }
            ]
          },
          {
            "props": {
              "width": 1
            },
            "styles": {
              "borderColor": "#000",
              "borderWidth": [
                0,
                0,
                0,
                0
              ],
              "borderStyle": "solid",
              "background": "#000000",
              "padding": [
                50,
                30,
                50,
                30
              ],
              "maxWidth": 1,
              "horizontalAlign": "center",
              "justify": "flex-start"
            },
            "children": [
              {
                "name": Elements.TEXT,
                "displayName": "Text",
                "props": {
                  "type": "Base",
                  "text": "Lorem ipsum dolor sit amet",
                  "styles": {
                    "borderColor": "#000",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "borderStyle": "solid",
                    "color": "#ffffff",
                    "fontSize": 50,
                    "fontSizeMobile": 30,
                    "padding": [
                      12,
                      0,
                      12,
                      0
                    ],
                    "fontWeight": 500
                  }
                }
              },
              {
                "name": Elements.TEXT,
                "displayName": "Text",
                "props": {
                  "type": "Base",
                  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                  "styles": {
                    "borderColor": "#000",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "borderStyle": "solid",
                    "color": "#ffffff",
                    "fontSize": 15,
                    "padding": [
                      20,
                      0,
                      0,
                      0
                    ]
                  }
                }
              }
            ]
          }
        ],
        "props": {
          "type": LayoutType.COLUMNS
        }
      }
    }
  },
  {
    name: "Text block",
    thumb: <svg width="100%" viewBox="0 0 325 188" className='opacity-60'>
      <g id="Group_5" data-name="Group 5" transform="translate(-68 -66)">
        <g id="Rectangle_724" data-name="Rectangle 724" transform="translate(70 69)" fill="none" stroke="#fff" stroke-width="3">
          <rect width="321" height="182" rx="32" stroke="none" />
          <rect x="1.5" y="1.5" width="318" height="179" rx="30.5" fill="none" />
        </g>
        <rect id="Rectangle_726" data-name="Rectangle 726" width="89" height="10" rx="5" transform="translate(186 119)" fill="#fff" />
        <rect id="Rectangle_727" data-name="Rectangle 727" width="56" height="10" rx="5" transform="translate(203 135)" fill="#fff" />
        <rect id="Rectangle_728" data-name="Rectangle 728" width="141" height="6" rx="3" transform="translate(160 155)" fill="#fff" opacity="0.481" />
        <rect id="Rectangle_729" data-name="Rectangle 729" width="67" height="6" rx="3" transform="translate(197 167)" fill="#fff" opacity="0.481" />
        <rect id="Rectangle_730" data-name="Rectangle 730" width="38" height="12" rx="2" transform="translate(190 189)" fill="#fff" />
        <rect id="Rectangle_732" data-name="Rectangle 732" width="325" height="188" transform="translate(68 66)" fill="none" />
        <rect id="Rectangle_741" data-name="Rectangle 741" width="38" height="12" rx="2" transform="translate(234 189)" fill="#fff" />
      </g>
    </svg>,
    section: {
      "layout": {
        "styles": {},
        "displayName": "Text block",
        "children": [
          {
            "props": {
              "width": 1
            },
            "styles": {
              "borderColor": "#000",
              "borderWidth": [
                0,
                0,
                0,
                0
              ],
              "borderStyle": "solid",
              "maxWidth": 5,
              "horizontalAlign": "center",
              "padding": [
                50,
                20,
                50,
                20
              ],
              "background": "#521e1e",
              "opacity": 1,
              "justify": "flex-start",
              "overlayOpacity": 0.66
            },
            "children": [
              {
                "name": Elements.EMPTY_SPACE,
                "displayName": "Empty Space",
                "props": {
                  "type": "Base",
                  "styles": {
                    "height": 80,
                    "heightType": "PIXELS"
                  }
                }
              },
              {
                "name": Elements.TEXT,
                "props": {
                  "type": "Base",
                  "text": "Lorem ipsum dolor sit amet",
                  "styles": {
                    "color": "#ffffff",
                    "padding": [
                      0,
                      0,
                      30,
                      0
                    ],
                    "fontSize": 52,
                    "textAlign": "center",
                    "fontWeight": 500,
                    "fontSizeMobile": 31,
                    "borderColor": "#000",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "borderStyle": "solid",
                    "background": "",
                    "width": 100,
                    "widthType": "FULL"
                  }
                },
                "displayName": "Text Block"
              },
              {
                "name": Elements.TEXT,
                "props": {
                  "type": "Base",
                  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                  "styles": {
                    "color": "#ffffff",
                    "padding": [
                      2,
                      0,
                      48,
                      0
                    ],
                    "fontSize": 16,
                    "textAlign": "center",
                    "borderColor": "#000",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "borderStyle": "solid"
                  }
                },
                "displayName": "Text Block"
              },
              {
                "name": Elements.BUTTONS,
                "displayName": "Buttons",
                "props": {
                  "type": "Button",
                  "gap": 6,
                  "buttons": [
                    {
                      "text": "Button 1",
                      "borderColor": "#000",
                      "borderWidth": [
                        0,
                        0,
                        0,
                        0
                      ],
                      "borderStyle": "solid",
                      "background": "#ffffff",
                      "color": "#000000",
                      "fontWeight": 700,
                      "width": 220,
                      "widthType": "PIXELS",
                      "textAlign": "center",
                      "padding": [
                        12,
                        12,
                        12,
                        12
                      ],
                      "fontSize": 17
                    },
                    {
                      "text": "Button 2",
                      "borderColor": "#000",
                      "borderWidth": [
                        0,
                        0,
                        0,
                        0
                      ],
                      "borderStyle": "solid",
                      "background": "#ffffff",
                      "color": "#000000",
                      "fontWeight": 700,
                      "width": 220,
                      "widthType": "PIXELS",
                      "textAlign": "center",
                      "padding": [
                        12,
                        12,
                        12,
                        12
                      ],
                      "fontSize": 17
                    }
                  ],
                  "align": "center"
                }
              },
              {
                "name": Elements.EMPTY_SPACE,
                "displayName": "Empty Space",
                "props": {
                  "type": "Base",
                  "styles": {
                    "height": 80,
                    "heightType": "PIXELS"
                  }
                }
              }
            ]
          }
        ],
        "props": {
          "type": LayoutType.DEFAULT
        }
      }
    }
  }
]
