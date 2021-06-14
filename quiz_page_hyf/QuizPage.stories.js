import React from 'react';

import { QuizPage } from './QuizPage.component';

import image1 from '../../assets/images/questionBackgrounds/question1background.png';

import PropTypes from 'prop-types';

export default {
  title: 'containers / QuizPage ',
  component: QuizPage,
  argTypes: {
    imageSrc: {
      control: { type: 'text' },
    },
    question: {
      control: { type: 'text' },
    },
    isAgreementQuestion: {
      control: { type: 'boolean' },
    },
    firstAnswer: {
      control: { type: 'text' },
    },
    secondAnswer: {
      control: { type: 'text' },
    },
     level:{
       control: { type: 'range', min: 0, max: 100, step: 10 },
     },
  }
  
};
const Template = ({imageSrc,question,isAgreementQuestion,firstAnswer,secondAnswer,level,onClick}) => {
  return <QuizPage imageSrc={imageSrc}
  question={question} isAgreementQuestion={isAgreementQuestion} firstAnswer={firstAnswer} secondAnswer={secondAnswer} level={level} onClick={onClick}/>;
};

export const Quiz = Template.bind({});
Quiz.args = {
  imageSrc:image1,
  question:"When visiting a website, what is it that you are most interested in?",
  isAgreementQuestion:false,
  firstAnswer:"How the website looks and how easy it is for the users",
  secondAnswer:"Logic behind how the website is built",
  level:"20",
  onClick:() => {},
};

Template.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  isAgreementQuestion: PropTypes.bool.isRequired,
  firstAnswer: PropTypes.string,
  secondAnswer: PropTypes.string,
  level: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
QuizPage.defaultProps = {
  firstAnswer: '',
  secondAnswer: '',
};