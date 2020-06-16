import React, { Component } from 'react'
import { Row, Col, Collapse, Button } from 'antd'
import { PlusSquareOutlined } from '@ant-design/icons';
import about1 from './asset/images/about1.png'
import './asset/css/about.css'


const { Panel } = Collapse;

export default class About extends Component {

    render() {

        return (
            <div className='aboutHtactive'>
                <Row className='header'>
                    <Col span={8}></Col>
                    <Col span={8}><h1>ABOUT HT ACTIVE</h1></Col>
                    <Col span={8}></Col>
                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className='lead'>
                        <p>HT Active is the team of Young & Brilliant people.
                        We will help and support all you need about Software Solutions. We’re developers, designers, support specialists and gamers.
                        We have all you needs.</p>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Row className='endAbout'>
                    <Col span={2}></Col>
                    <Col span={10}>
                        <h2 className='title'>Meet the team - HT Active</h2>
                        <Row>
                            <Col span={12}>
                                <img src={about1} alt='about1' className='about1' />
                                <p></p>
                            </Col>
                            <Col span={12}>
                                <p className='htteamP'>We work on the services, product and comunication. We love what we do, and who we do it with.
                                     To HT Active, all customers are friends.</p>
                            </Col>
                            <p className='htteamP'>We work on the services, product and comunication. We love what we do, and who we do it with. To HT Active, all customers are friends.</p>
                            <button>READ MORE</button>
                        </Row>
                    </Col>
                    <Col span={10}>
                        <Collapse
                            defaultActiveKey={['1']}>
                            <Panel className='collapse-item' header="Reliance" key="1" extra={genExtra()}>
                                <div>{text1}</div>
                            </Panel>
                            <Panel header="Fast and high quality commitment" key="2" extra={genExtra()}>
                                <div>{text2}</div>
                            </Panel>
                            <Panel header="Savings and effieciency" key="3" extra={genExtra()}>
                                <div>{text3}</div>
                            </Panel>
                            <Panel header="24/7 supporting" key="4" extra={genExtra()}>
                                <div>{text4}</div>
                            </Panel>
                        </Collapse>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Row className='backgroundEndAbout' >
                    <Col span={4}></Col>
                    <Col span={12} className='inforEndAbout'>
                        <h1>DON'T MISS OUT, CONTACT US NOW!</h1>
                        <p>We will reply your mesage as soon as posible</p>
                    </Col>
                    <Col span={8} className='buttonEndAbout'>
                        <Button type="danger">CONTACT</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}


const text1 = `Professional ethics is the number one criteria. For customer, we will always be honest because only the trust and satisfaction of customers bring us success.`;
const text2 = `We measure our success as a company by how well we achieve, not by the size of our profits. We'll do our best to bring you just the satisfied in the fastest way. When the service provider is not good just as committed, HT Active will refund to you. There will always be so.`;
const text3 = `We do services not only for the profits, but also by the passion. We’re developers, designers, support specialists and gamers. We all love programing. Our services will savings and efficiency.`;
const text4 = `HT Active will always support, serve, and maintain our customer for long term. Beside that, we provide a live chat system, working 24/7, that will help you immediate access to help.`;
const genExtra = () => (
    <PlusSquareOutlined
        onClick={event => {
            // If you don't want click extra trigger collapse, you can prevent this:
            event.stopPropagation();

        }}
    />
);