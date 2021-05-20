import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils';
import Card from './index'

let container = null;
beforeEach(()=>{
    container = document.createElement("div")
    document.body.appendChild(container)
});
afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it("renders user data", () => {

    const list={
        countries:[{
            name: 'Test Country',
            population: 123123,
            capital: 'test capital',
            region: 'test region'
        }]
    }

    act(()=>{
        render(<Card countries={list} />, container );
    });
    expect(container.textContent).toBe("Where in the world?Dark Mode");
})