import React, { useState } from 'react'
import styled from 'styled-components'

import { WeatherBlockOnSevenDays } from '../../components/WeatherBlock/WeatherBlockOnSevenDays'
import { WeatherBlockOfThePast } from '../../components/WeatherBlock/WeatherBlockOfThePast'
import { PageContainer, PageTitle, PageTitleWord, PageFooter, IconNoConnectInform } from '../styles'
import noConnectIcon from '../../images/no-connect.png'

const WeathersBlocks = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${'(max-width: 1470px)'} {
    flex-direction: column;
    align-items: center;
  }
`

export const MainPage = () => {
  const [internetConnection, setInternetConnection] = useState(true);

  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  function updateOnlineStatus(event: any) {
    setInternetConnection(navigator.onLine ? true : false);
  }

  return (
    <PageContainer>
    <IconNoConnectInform src={noConnectIcon} hidden={internetConnection} />
    <PageTitle>
      <PageTitleWord lineHeight="83px" textAlign="left">Weather</PageTitleWord>
      <PageTitleWord lineHeight="97px" textAlign="right">forecast</PageTitleWord>
    </PageTitle>
    <WeathersBlocks>
      <WeatherBlockOnSevenDays />
      <WeatherBlockOfThePast />
    </WeathersBlocks>
    <PageFooter>C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</PageFooter>
  </PageContainer>
  )
}
