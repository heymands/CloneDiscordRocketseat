import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from  './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const div = messagesRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  })
  return (
    <Container> 
      <Messages ref={messagesRef}>
      {Array.from(Array(18).keys()).map((n) =>
      <ChannelMessage 
      key={n}
      author="Amanda Costa"
      date="01/08/2020"
      content="Isso é uma mensagem."     
      />)}
      

      <ChannelMessage 
          author="Diego Fernandes"
          date="01/08/2020"
          content={
            <>
              <Mention>@Amanda Costa</Mention>, me carrega no Fortnite 
              e COD de novo, por favor?
            </>  
          }
      hasMention
      isBot   
        />


      </Messages>
      <InputWrapper>
          <Input type="text" placeholder="Conversar em chat livre"/>
      <InputIcon />   
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;