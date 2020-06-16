import React, { Component } from 'react'
import { Row, Col, Tabs, Carousel } from 'antd'
import './asset/css/whychoose.css'
import imgmenu1 from './asset/images/imgtabWC1.png'
import imgmenu2 from './asset/images/imgtabWC2.png'
import imgmenu3 from './asset/images/imgtabWC3.png'
import imgmenu4 from './asset/images/imgtabWC4.png'
import end1 from './asset/images/client1.png'
import end2 from './asset/images/client2.png'
import end3 from './asset/images/client3.png'
import end4 from './asset/images/client4.png'
import end5 from './asset/images/client5.png'
import end6 from './asset/images/client6.png'
import end7 from './asset/images/client7.png'

const { TabPane } = Tabs;



export default class Whychoose extends Component {
    state = {
        slides:
            [end1,end2, end3, end4, end5, end6, end7],
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
           
        };

        return (
            <div className='whychoose'>
                <Row className='header'>
                    <Col span={8}></Col>
                    <Col span={8}><h1>WHY CHOOSE HT ACTIVE</h1></Col>
                    <Col span={8}></Col>
                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className='lead'>
                        <p>HT Active offers a great service in the design, development and programming of your website/application.
                             We strive to offer the best solution for your business and impartial advice at an honest price. We are constantly investigating new technologies and recommend them when they make sense.</p>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Row className='menuWC'>
                    <Col span={2}> </Col>
                    <Col span={20}>
                        <Tabs defaultActiveKey='1' tabPosition='left' >
                            <TabPane tab='THE RIGHT TEAM' key='1'>
                                <h3>THE RIGHT TEAM</h3>
                                <p>We love what we do, some might say a bit too much, and we bring enthusiasm and commitment to every project we work on. Put simply,
                                 if you want a partner who cares about your business, choose HT Active.</p>
                                <img src={imgmenu1} alt='zcsdc' className='imgmenuWC' />
                                <p></p>
                            </TabPane>
                            <TabPane tab='WE LISTEN' key='2'>
                                <h3>WE LISTEN</h3>
                                <p>We listen, we discuss, we advise. We then select the best solution to fit. We don’t shoehorn projects and if we feel we’re not a good fit we’ll be honest and tell you from the outset. We're experienced programmers,
                                     we love discussing and planning new projects and have years of knowledge and ex</p>
                                <img src={imgmenu2} alt='fr' className='imgmenuWC' />
                            </TabPane>
                            <TabPane tab='CREATIVE & TECHNICAL' key='3'>
                                <h3>CREATIVE & TECHNICAL</h3>
                                <p>Whether it’s website or application, game..., system development or custom programming, we like to keep everything under one roof to make it easier for our customers. We love nothing more than working on a great project with a fantastic client.
                                     We care about our clients and can often be found</p>
                                <img src={imgmenu3} alt='kjkj' className='imgmenuWC' />
                            </TabPane>
                            <TabPane tab='UNDER ONE ROOF' key='4'>
                                <h3>UNDER ONE ROOF</h3>
                                <p>HT Active is 'one-stop-shop' software solution agency providing everything you need to successfully market your business to customers.
                                     Our services include planning and strategy, design and development, building and deploying web applications/mobile application/game belong with graphic design,</p>
                                <img src={imgmenu4} alt='hghgh' className='imgmenuWC' />
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Row className='endWC'>
                    <Col span={2}></Col>
                    <Col span={10}>
                        <div className='CarouselEndWC'>
                            <Carousel {...settings}>
                                {this.state.slides.map(function (slide, index) {
                                    return (
                                        <div key={index}>
                                            <img src={slide} alt='jhgj' />
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </div>
                    </Col>
                    <Col span={6} className='textEndWC'>
                        <p>Design is not just what it looks like and feels like.
                         Design is how it works.</p>
                    </Col>
                    <Col span={4}></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}
