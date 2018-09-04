import React from 'react'
import { Layout,Row,Col } from 'antd'
import styles from './map.less'

const { Header,Content } = Layout

import back from '../../assets/background.jpg'


export default class Map extends React.Component{
  render(){
    return (
      <div>
        <Layout>
          <Header style={{backgroundColor:'rgb(250,250,250)',textAlign:'center'}}><h1 style={{fontSize:35}}>餐厅电子地图</h1></Header>
          <Content>
            <Row>
              <Col span={24}>
                <div className={styles.background}>dd</div>
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    )
  }
}
