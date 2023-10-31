import { PageStatus } from '../../types/common';
import { Elements, LayoutType, PageDataType } from './types';

export const pageDataInitial: PageDataType =
{
  "name": "Summer ad 2023",
  "url": "/",
  status: PageStatus.DRAFT,
  header: {
    color: "#fff",
    background: "#000"
  },
  footer: {
    color: "#fff",
    background: "#000",
    links: []
  },
  "sections": [
    {
      "layout": {
        "styles": {},
        "displayName": "Image and text columns",
        "children": [
          {
            "props": {
              "width": 50
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
              ]
            },
            "children": [
              {
                "name": Elements.TEXT,
                "props": {
                  "type": "Base",
                  "text": "Refreshing Interiors",
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
                  "text": "Fill your room with refreshing energy with our wide range of premium flooring",
                  "styles": {
                    "color": "#ffffff",
                    "padding": [
                      0,
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
              "width": 50
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
    },
    {
      "layout": {
        "styles": {},
        "displayName": "Text over Image",
        "children": [
          {
            "props": {
              "width": 100
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
              "background": "#3c1515",
              "padding": [
                50,
                50,
                50,
                50
              ]
            },
            "children": [
              {
                "name": Elements.IMAGE,
                "props": {
                  "type": "Base",
                  "image": {
                    "id": "51748493-3565-4517-4154-6905376aec00",
                    "url": "https://imagedelivery.net/yu75guoeeZPimxdUQ98aHg/51748493-3565-4517-4154-6905376aec00/public",
                    "meta": {
                      "name": "pexels-maksim-goncharenok-4352247.jpg",
                      "type": "image/jpeg"
                    }
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
                    "height": 2,
                    "heightType": "RELATIVE"
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
                  "text": "Fill your room with refreshing energy with our wide range of premium flooring",
                  "styles": {
                    "color": "#ffffff",
                    "padding": [
                      0,
                      0,
                      0,
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
              }
            ]
          }
        ],
        "props": {
          "type": LayoutType.DEFAULT
        }
      }
    },
    {
      "layout": {
        "styles": {},
        "displayName": "Text Columns",
        "children": [
          {
            "props": {
              "width": 100
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
              "horizontalAlign": "center",
              "maxWidth": 3,
              "background": "#121212"
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
                    "height": 1.2,
                    "heightType": "RELATIVE"
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
                    "color": "#000000",
                    "padding": [
                      4,
                      0,
                      12,
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
                    "background": "#ffffff"
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
                      20,
                      20,
                      24,
                      20
                    ],
                    "fontSize": 16,
                    "borderColor": "#000",
                    "borderWidth": [
                      0,
                      0,
                      0,
                      0
                    ],
                    "borderStyle": "solid",
                    "background": "#1c1c1c",
                    "textAlign": "center"
                  }
                },
                "displayName": "Text Block"
              }
            ]
          }
        ],
        "props": {
          "type": LayoutType.DEFAULT
        }
      }
    },
    {
      "layout": {
        "styles": {},
        "displayName": "Text with button",
        "children": [
          {
            "props": {
              "width": 100,
              "backgroundImage": {
                "id": "https://tusd.tusdemo.net/files/9ba370e75ace96d529b60c917598c42e+Fp5zE7b5mppe4SCT9we1mPUwevuflZWa5UkZ.aLVPlJmtSNbAYRwIFsUzLk5xgrWjOoS_XM3cyZ9DXkVyVFs3gQRfmOKIZ0jBG2h_4if9hL6mxN7DnAHYSw8tcliEcsq",
                "url": "https://tusd.tusdemo.net/files/9ba370e75ace96d529b60c917598c42e+Fp5zE7b5mppe4SCT9we1mPUwevuflZWa5UkZ.aLVPlJmtSNbAYRwIFsUzLk5xgrWjOoS_XM3cyZ9DXkVyVFs3gQRfmOKIZ0jBG2h_4if9hL6mxN7DnAHYSw8tcliEcsq",
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
              "maxWidth": 3,
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
                    "id": "https://tusd.tusdemo.net/files/f66b7920e98610abe40fe6e147b9de96+aG83n_JFiTl9F2ZATXfMLABbwHuY3lpkDVHfmvQcsvPAmm4375tcqq3CFJE9rydEhgBX0v8QTOw8M_wQOrwxsiPlk.3mPAq4arNmjR_DWVvIXMWQxbI3SDfxoVlVZLQu",
                    "url": "https://tusd.tusdemo.net/files/f66b7920e98610abe40fe6e147b9de96+aG83n_JFiTl9F2ZATXfMLABbwHuY3lpkDVHfmvQcsvPAmm4375tcqq3CFJE9rydEhgBX0v8QTOw8M_wQOrwxsiPlk.3mPAq4arNmjR_DWVvIXMWQxbI3SDfxoVlVZLQu",
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
                      500,
                      500,
                      500,
                      500
                    ],
                    "height": 1,
                    "heightType": "RELATIVE"
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
                      0,
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
              }
            ]
          }
        ],
        "props": {
          "type": LayoutType.DEFAULT
        }
      }
    }
  ]
}