import React from 'react';
import Sortable from 'sortablejs';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { Col, Row, Panel } from 'react-bootstrap';

const Report = (props) => {

    return (
        <Row className="show-grid course">
            <Col xs={6} md={4}>
                <Panel header='Good Points' bsStyle="success">
                    <div id="listWithHandle" className="list-group">
                        {
                            props.data.rows.good.points.map((point, index) => (
                                <Row xs={6} md={6} key={index} className="list-group-item">
                                    {point}
                                </Row>
                            ))
                        }
                    </div>
                </Panel>
            </Col>
            <Col xs={6} md={4}>
                <Panel header='Improvements Points' bsStyle="success">
                    <div id="listWithHandle1" className="list-group">
                        {
                            props.data.rows.improvements.points.map((point, index) => (
                                <Row xs={6} md={6} key={index} className="list-group-item">
                                    {point}
                                </Row>
                            ))
                        }
                    </div>
                </Panel>
            </Col>
            <Col xs={6} md={4}>
                <Panel header='Course of Action' bsStyle="success">
                    <div id="listWithHandle2" className="list-group">
                        {
                            props.data.rows.course.points.map((point, index) => (
                                <Row xs={6} md={6} key={index} className="list-group-item">
                                    {point}
                                </Row>
                            ))
                        }
                    </div>
                </Panel>
            </Col>
        </Row>
    )
}

const mapStateToProps = state => ({
    data: state.data
})

const enhance = compose(

    connect(mapStateToProps),

    lifecycle({
        componentDidMount: () => {
            const el = document.getElementById('listWithHandle');
            const el1 = document.getElementById('listWithHandle1');
            const el2 = document.getElementById('listWithHandle2');
            el && Sortable.create(el);
            el1 && Sortable.create(el1);
            el2 && Sortable.create(el2);
        }
    })
)

export default enhance(Report);