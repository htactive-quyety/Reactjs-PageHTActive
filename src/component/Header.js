import React, { Component } from 'react'
import { Button, Row, Col, Menu, Carousel } from 'antd'
import { LaptopOutlined, PhoneOutlined } from '@ant-design/icons'
import './asset/css/header.css'
import logo from './asset/images/logo.png'
import slide1 from './asset/images/slide1.png'
import slide2 from './asset/images/slide2.png'
import slide3 from './asset/images/slide3.png'



export default class Header extends Component {
    
    render() {
        // const { name, abc } = this.props
        return (
            // <div>
            //     Hello {name} ! 
            //     Quyet ăn {abc || "cơm"}
            // </div>
            <header>
                <div className="container" >
                    <div className='menuHeader' >
                        <Menu>
                            <Row>
                                <Col span={2}>
                                </Col>
                                <Col span={7}>
                                    <img src={logo} alt="Logo" />
                                    <div className='solugan'>Your Satisfaction Is Our Success</div>
                                </Col>
                                <Col span={5}></Col>
                                <Col span={10}>
                                    <Menu mode='horizontal'>
                                        <Menu.Item>HOME</Menu.Item>
                                        <Menu.Item>SERVICE</Menu.Item>
                                        <Menu.Item>PORTFOLIOS</Menu.Item>
                                        <Menu.Item>BLOGS</Menu.Item>
                                        <Menu.Item>CONTACT</Menu.Item>
                                    </Menu>
                                </Col>
                            </Row>
                        </Menu>
                    </div>
                    <div className='CarouselHeader'>
                        <Carousel autoplay>
                            <div>
                                <img  src={slide1} alt='slide1' className='slide' />
                            </div>
                            <div>
                                <img src={slide2} alt='slide2'  className='slide'/>
                            </div>
                            <div>
                                <img src={slide3} alt='slide3'  className='slide'/>
                            </div>
                        </Carousel>
                        <div class="tp-bannertimer tp-bottom "></div>
                    </div>
                    <div className="header">
                        <Row >
                            <Col span={6} >
                            </Col>
                            <Col span={12}>
                                <h1>SERVICE</h1>
                            </Col>
                            <Col span={6}></Col>
                        </Row>
                        <Row>
                            <Col span={6}></Col>
                            <Col span={12} className='h2'><p> By using our services, you will get all of the great experience.</p></Col>
                            <Col span={6}></Col>
                        </Row>
                        <div className='content'>
                            <Row style={{ textAlign: 'center' }}>
                                <Col span={2} ></Col>
                                <Col span={6} className='infor'>
                                    <LaptopOutlined className='Icon' />
                                    <h2>Web appliactions</h2>
                                    <p>Design and develop web applications, hosting service, domain, SEO.</p>
                                    <Button type="danger">READ MORE</Button>
                                </Col>
                                <Col span={6} className='infor'>
                                    <PhoneOutlined className='Icon' />
                                    <h2>Mobile Applications</h2>
                                    <p>Design and develop mobile applications, publish and app store optimization</p>
                                    <Button type="danger">READ MORE</Button>
                                </Col>
                                <Col span={6} className='infor'>
                                    <LaptopOutlined className='Icon' />
                                    <h2>Mobile Games</h2>
                                    <p>Design and develop mobile games, publish and app store optimization</p>
                                    <Button type="danger">READ MORE</Button>
                                </Col>
                                <Col span={2}></Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </header>


        )
    }
}




// const Header = (props) => {
//     const [a, setA] = useState("a1111111111")
//     const [b, setB] = useState("b1111111111")
//     const [c, setC] = useState("c1111111111")
//     function test() {
//         setC("quyet")
//     }
//     return (
//         <header>
//             <div className="container" >
//                 <div className='row'>
//                     <div className='col-sm-4'>
//                         <img src={logo} />
//                     </div>
//                     <div className='col-sm-4'>{a}</div>
//                     <div className='col-sm-4'>{b}</div>
//                     <Button variant="danger" onClick={test}>{c}</Button>
//                 </div>
//             </div>
//         </header>
//     )
// }
