import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #161624;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5%;
`
export const Heading = styled.h1`
  margin: 0;
  margin-bottom: 5px;
  color: #ffffff;
  font-size: 28px;
`

export const CountryList = styled.ul`
  padding: 0;
  margin-bottom: 20px;
  overflow-y: scroll;
  height: 40vh;
  border-radius: 10px;
  background-color: #1f1f2f;
`
export const CountryItem = styled.li`
  list-style-type: none;
  border-bottom: 1px solid #cbd5e1;
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  justify-content: space-between;
  display: flex;
`
export const CountryName = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin: 10px;
`
export const VisitedPara = styled.p`
  font-size: 16px;
  color: #334155;
  margin-right: 7px;
`
export const VisitButton = styled.button`
  outline: none;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 15px;
  border-radius: 10px;
  padding: 7px;
  padding-right: 15px;
  padding-left: 15px;
`

export const NoCountry = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoCountryHeading = styled.p`
  font-size: 28px;
  color: #ffffff;
`
export const VisitedCountries = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`
export const VisitedItem = styled.li`
  list-style-type: none;
  width: 31%;
  margin: 1%;
`
export const VisitedImg = styled.img`
  width: 100%;
`
export const NameAndRemove = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background-color: #1f1f2f;
`

export const RemoveButton = styled.button`
  outline: none;
  border: 1px solid #cbd5e1;
  background-color: transparent;
  color: #ffffff;
  font-size: 15px;
  border-radius: 10px;
  padding-right: 15px;
  padding-left: 15px;
  height: 32px;
`
