import React, { Component } from 'react'

module.exports = class LearningGoals1 extends Component {

    render() {
        return (
            <div>
            <h2><p>Subjects marked IN RED are what I call “scratch the surface” subjects. For example: you need to know the purpose of Webpack and Babel and how to “use it”, but only in a way so you can demonstrate you know the “basics” to get started. ES-Lint, Webpack, Babel and Typescripts are topics you can take (great)  advantage of during the rest of the semester (and get thereby get more experience), but you are NOT required to do this.</p>
            <p>Explain and Reflect:</p></h2>
            <h3>
            <ul>
            <li>Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.</li>
            <li>Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node, in (many different) Browsers</li>
            <li>Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system.</li>
            <li>Explain about the Event Loop in Node.js</li>
            <li>Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises</li>
            <li>Explain the purpose of “use strict” and also Linters, exemplified with ESLint</li>
            <p>Explain using sufficient code examples the following features in JavaScript. </p>
            <li>Variable/function-Hoisting</li>
            <li>this in JavaScript and how it differs from what we know from Java/.net.</li>
            <li>Function Closures and the JavaScript Module Pattern</li>
            <li>Immediately-Invoked Function Expressions (IIFE)</li>
            <li>JavaScripts Prototype</li>
            <li>User defined Callback Functions</li>
            <li>Explain the methods map, filter and reduce</li>
            <li>Provide examples of user defined reusable modules implemented in Node.js</li>
            </ul>
            </h3>
            <h2><p>ES6-7 and TypeScript</p></h2>
            <h3>
            <ul>
                <li>Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.</li>
                <li>Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.</li>
                <li>Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.</li>
                <li>Provide examples with es6, running in a browser, using Babel and Webpack</li>
                <li>Provide an number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics</li>
            </ul>
            </h3>
            </div>
        )
    }
}
