import React from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import * as classNames from 'classnames';
import { compose, withHandlers } from 'recompose';
import { Col, ControlLabel } from 'react-bootstrap';

import { images } from '../../constant/images';
import { selectMoodAction } from '../../actions/mood';

const LastRetro = (props) => {

    return (
        <Element name="home" className="mood" >
            < div >
                <Col lg={12} xs={12}>
                    <ControlLabel>How did the last Sprint went for you:</ControlLabel>
                </Col>
                <Col lg={12} xs={12} className='icon-align'>
                    {
                        images.map((image, index) => {
                            let isZoomed = classNames({
                                'zoom': props.mood.id === index
                            });
                            return (
                                <img src={image.name} className={isZoomed} alt={image.description}
                                    onClick={() => props.selectMood(image, index)} />
                            )
                        })
                    }
                </Col>
            </div >
        </Element>
    )
}

const mapStateToProps = state => ({
    mood: state.data.mood
})

const mapDispatchToProps = {
    selectMoodAction
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),

    withHandlers({
        selectMood: (props) => (image, index) => {
            props.selectMoodAction(
                {
                    id: index,
                    name: image.description
                }
            )
        }
    })
)

export default enhance(LastRetro);