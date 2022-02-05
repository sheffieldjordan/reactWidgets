import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './Translate';
import Route from './components/Route';
import Header from './components/Header';


const items =[
    {
        title: 'What is React?',
        content: 'React is a front-end JS framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite!'
    },
    {
        title: 'How do you use React?',
        content: 'You use it by creating Components.'
    }
];

const options = [
    {
        label:'The Color Red',
        value:'red'
    },
    {
        label:'The Color Green',
        value:'green'
    },
    {
        label:'The Color Blue',
        value:'blue'
    }
];


export default () => {
    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
    <div>
        <Header />
        <Route path="/">
            <Accordion items={ items } />
        </Route>

        <Route path="/list">
            <Search />
        </Route>

        <Route path="/dropdown">
            <Dropdown label="Select a Color" options={options} selected={selected} onSelectedChange={(setSelected)}></Dropdown>
        </Route>

        <Route path="/translate">
            <Translate label="Select a Language" options={options} selected={selected} onSelectedChange={(setSelected)}></Translate>
        </Route>


    </div>
    )};