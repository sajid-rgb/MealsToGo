import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { Card, Paragraph, Button } from 'react-native-paper';
import  {SvgXml}  from "react-native-svg";
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import {Spacer} from '../../../components/spacer/spacer.component'

const Title = styled.Text`
  font-family:${(props)=>props.theme.fonts.body};
  color:blue;
  font-size:25px;
  width: 50%;
  background-color:lightgreen;
  
   
  `;

const ResCard = styled(Card)`
  border-radius:5px;
  background-color:${(props)=>props.theme.colors.bg.secondary};
  padding:${(props)=>props.theme.space[3]};
  margin-bottom:${(props)=>props.theme.space[3]};
  box-shadow:2px 2px 2px grey

`
const Cover = styled (Card.Cover)`
  border-radius:5px
`
const Info = styled.View`
 padding:${(props)=>props.theme.space[3]};
`
const Adress = styled.Text `
font-family:${(props)=>props.theme.fonts.heading};
`
const Ratings = styled.View `
flex-direction:row;
margin-top:4px;
margin-left:4px
`
const Section = styled.View `

 flex-direction:row;
 align-items:center

`
const SectionEnd = styled.View `
 flex:1;
 flex-direction:row
 justify-content:flex-end
`
export const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Name',
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photo = 'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    isOpenNow = true,
    ratings = 4,
    adress = 'Some adress',
    isClosed=true
  } = restaurant;

  const ratingsArray = Array.from(new Array(Math.ceil(ratings)))

  console.log(ratingsArray)

  return (
    <ResCard>

      <Cover source={{ uri: photo }} />
        
        <Info>
        
        <Title> {name} </Title>
        <Section>
        <Ratings>
        {
          ratingsArray.map(()=><SvgXml xml={star} width={20} height={20} />)
        }
        
        </Ratings>

        <SectionEnd>
        {
          isClosed && <Text variant="label" style={{color:'red'}}>Closed Temporarily </Text>
        }
                <Spacer position='top' size='small' />
        {
          isOpenNow && <SvgXml xml={open} width={20} height={20} />
        }

        <Spacer position='left' size='large'/>

        <Image style={{width:16,height:16}} source={{uri:icon}} />

  

        </SectionEnd>
        </Section>

        <Adress> {adress} </Adress>

        </Info>
    

    </ResCard>
  );
};
