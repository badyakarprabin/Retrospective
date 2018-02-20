import React from 'react';
import 'animate.css'
import { connect } from 'react-redux';
import { Element, Link } from 'react-scroll';
import * as classNames from 'classnames';
import { Col, Panel } from 'react-bootstrap';
import { compose, withHandlers, withState } from 'recompose';

import { images } from '../../constant/images';
import { selectMoodAction } from '../../actions/mood';

const ImageList = (props) => (
    <div className='col-xs-12 icon-align'>
        {
            images.map((image, index) => {
                let isZoomed = classNames({
                    'zoom': props.mood.id === index
                });
                return (
                    <span key={index}>
                        <img title={image.description} src={image.name} className={isZoomed} alt={image.description}
                            onClick={() => props.selectMood(image, index)} />
                    </span>
                )
            })
        }
    </div>
);

const LastRetro = (props) => {
    let animate = classNames({
        'col-xs-12': true,
        'animated bounce': props.showNext
    });
    return (
        <div className="mood section-container first-section" >
            <ul className="list-group list-group-flush">
                <li className="list-group-item disabled">How did the last Sprint went for you ?</li>
                <ImageList {...props} />
            </ul>
            <div className={animate} >
                <div className='btn btn-success'>Next</div>
            </div>
        </div>
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

    withState('showNext', 'setShowNext', false),

    withHandlers({
        selectMood: (props) => (image, index) => {
            props.setShowNext(true);
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