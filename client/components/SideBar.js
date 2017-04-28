import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu, Icon } from 'antd';
import _ from 'lodash';

const SubMenu = Menu.SubMenu;

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.routing);
  }

  render() {
    // let { menus } = this.props.sideBar;
    const menus = {
    overview: {
      link: '/',
      icon: 'appstore',
      display: '概览'
    },
    dashboard: {
      icon: 'mail',
      display: '风险大盘',
      submenu: {
        riskTrend: {
          link: '/test',
          display: '风险趋势'
        },
        riskTrend: {
          link: '/ruleengine',
          display: '规则引擎'
        },
        riskTrend: {
          link: '/ruleengine2',
          display: '规则引擎2'
        },
        riskIndex: {
          display: '风险指标',
          submenu: {
            indexReport: {
              link: '/test2',
              display: '指标报表'
            },
            deviceCapture: {
              link: '/testFile',
              display: '文件上传'
            },
            deviceCapture2: {
              link: '/testFile2',
              display: '文件上传2'
            }
          }
        }
      }
    },

}
    return (
      <Menu style={{ width: 200 }}
        mode="inline"
      >
        {
        _.map(menus, (lv1, id1) => {
          if (!lv1.submenu) {
            return (<Menu.Item key={id1}>
                        <Link to={lv1.link}>
                          <span><Icon type={lv1.icon} /><span>{ lv1.display }</span></span>
                        </Link>
                    </Menu.Item>)
          }else{
            return(<SubMenu key={id1} title={<span><Icon type={lv1.icon} /><span>{ lv1.display }</span></span>}>
              {
                _.map(lv1.submenu, (lv2, id2) => {
                  if (!lv2.submenu) {
                    return (<Menu.Item key={ id2 }><Link to={lv2.link}>{ lv2.display }</Link></Menu.Item>)
                  }else{
                    return (<SubMenu key={id2} title={<span>{ lv2.display }</span>}>
                      {
                        _.map(lv2.submenu, (lv3, id3) => {
                          return (<Menu.Item key={ id3 }><Link to={lv3.link}>{ lv3.display }</Link></Menu.Item>)
                        })
                      }
                    </SubMenu>)
                  }
                })
              }
            </SubMenu>)
          }
        })
        }
      </Menu>
    )
  }
}