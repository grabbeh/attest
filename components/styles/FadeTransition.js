import { CSSTransitionGroup } from 'react-transition-group'
import { Fragment } from 'react'

const FadeTransition = props => (
  <Fragment>
    <CSSTransitionGroup
      component={props.element}
      className={props.css}
      transitionName='example'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      transitionAppearTimeout={500}
      transitionAppear
    >
      {props.children}
    </CSSTransitionGroup>
  </Fragment>
)

export default FadeTransition
