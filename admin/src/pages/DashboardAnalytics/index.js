import React from 'react';
import { Col, Container, Row } from 'reactstrap';

//import COmponents
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Dashboard from '../../Components/Dashboard/Dashboard';
import LiveUsers from './LiveUsers';
import Widget from './Widget';

const DashboardAnalytics = () => {
document.title="Analytics | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Analytics" pageTitle="Dashboards" />
                    <Row>
                        <Col xxl={5}>
                         
                            <Widget />
                        </Col>
                        <LiveUsers />
                    </Row>
                    {/* <Row>
                        <AudiencesMetrics />
                        <AudiencesSessions />
                    </Row> */}
                    <Row>
                        <div className='mt-4 mb-5'>
                        <Dashboard />
                        </div>
                       
                        {/* <UsersByDevice />
                        <TopReferrals />
                        <TopPages /> */}
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default DashboardAnalytics;