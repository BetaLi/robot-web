import React from 'react'
import { Layout,Row,Col } from 'antd'
import styles from './map.less'

const { Header,Content } = Layout



export default class Map extends React.Component{
  componentDidMount(){
    window.addEventListener('resize',this.handHeight)
  }

  componentWillUnmount(){
    window.removeEventListener('resize',this.handHeight)
  }

  handHeight = ()=> {
    const ff = document.getElementById("background").offsetWidth
    document.getElementById('background').style.height = `${Math.floor(ff*1486/3972)}px`
  }

  render(){
    
    return (
      <div>
        <Layout>
          <Header style={{backgroundColor:'rgb(250,250,250)',textAlign:'center'}}><h1 style={{fontSize:35}}>餐厅电子地图</h1></Header>
          <Content>
            <Row>
              <Col span={24}>
                <div id="background" className={styles.background}>
                  <div style={{width:10,height:10,position:'relative',top:'10%',left:'30%',border:'solid 1px'}} />
                </div>
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    )
  }
}
