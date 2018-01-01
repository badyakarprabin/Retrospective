import React from 'react';
import { connect } from 'react-redux';
import { Element, Link } from 'react-scroll';
import * as classNames from 'classnames';
import { Col, Panel, ButtonGroup, ButtonToolbar, Glyphicon, Button } from 'react-bootstrap';
import { compose, withHandlers } from 'recompose';

import { images } from '../../constant/images';
import { selectMoodAction } from '../../actions/mood';

const ImageList = (props) => (
    <Col lg={12} xs={12} className='icon-align'>
        {
            images.map((image, index) => {
                let isZoomed = classNames({
                    'zoom': props.mood.id === index
                });
                return (
                    <Link key={index} activeClass="active" to="good" spy={true} smooth={true} offset={-100} duration={500}>
                        <img title={image.description} src={image.name} className={isZoomed} alt={image.description}
                            onClick={() => props.selectMood(image, index)} />
                    </Link>
                )
            })
        }
    </Col>
);

const LastRetro = (props) => {
    return (
        <Element name="home" className="mood" >
            <Panel header='How did the last Sprint went for you:' bsStyle="primary">
                <ImageList {...props} />
            </Panel>
            <Col xs={1} xsOffset={11} >
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button>
                            <Link activeClass="active" to="good" spy={true} smooth={true} offset={-100} duration={500}>
                                Next <Glyphicon glyph="arrow-right" />
                            </Link>
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Col>
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