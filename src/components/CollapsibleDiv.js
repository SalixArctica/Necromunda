import React from "react";

import styled from "styled-components";

const FullDiv = styled.div`
  position: sticky;
  top: 0;
`

const Heading = styled.p`
  background: #292C32;
  color: white;
  text-align: center;
  padding: 5px;
  margin: 0;
  transform: rotate(${props => (props.open ? "180deg" : "0")});
  transition-delay: .3s;
`;

const Content = styled.div`
  border: 1px solid gray;
  border-top: none;
  transform-origin: top;
  max-height: ${props => (props.open ? "10rem" : "0")};
  overflow: hidden;
  transition: all .3s ease-in-out;
`;

class CollapsibleDiv extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <FullDiv>
        <Content open={this.state.open}>
          {this.props.children}
        </Content>
        <Heading open={this.state.open} onClick={this.toggleOpen}>▼</Heading>
      </FullDiv>
    );
  }
}

export default CollapsibleDiv;