import React, { Component } from 'react'

module.exports = class LearningGoals1 extends Component {

    render() {
        return (
            <div>
            Subjects marked IN RED are “scratch the surface” subjects. For example: you need to know how to do server-side rendering with express (similar to what you did with JSP on 2. semester), but our main focus this semester are REST-based Single Page Applications and (REST based) Mobile Apps.
            Why would you consider a Scripting Language as JavaScript as your Backend Platform?
            Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using for example Java/JAX-RS/Tomcat
            Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server.
            Explain briefly how to deploy a Node/Express application including how to solve the following deployment problems:
            ●	Ensure that you Node-process restarts after a (potential) exception that closed the application
            ●	Ensure that you Node-process restarts after a server (Ubuntu) restart
            ●	Ensure that you can take advantage of a multi-core system
            ●	Ensure that you can run “many” node-applications on a single droplet on the same port (80)
            Explain, using relevant examples, concepts related to testing a REST-API using Node/JavaScript + relevant packages 
            Explain, using relevant examples, the Express concept; middleware.
            Explain, using relevant examples, how to implement sessions, and the legal implications of doing this.
            Explain (conceptually) how you would handle sessions if you run your app in clusters to solve some of problems related to deployment.
            Compare the express strategy toward (server side) templating with the one you used with Java on second semester.
            Demonstrate a simple Server Side Rendering example using a technology of your own choice.
            Explain, using a relevant examples, your strategy for implementing a REST-API with Node/Express and show how you can "test" all the four CRUD operations programmatically using for example the Request package.
            Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code.
            Explain, using relevant examples, different ways to mock out databases, HTTP-request etc.
            Mongo and MongoDB
            Explain, briefly, what is meant by a NoSQL database.
            Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.
            Explain how databases like MongoDB be classified in the NoSQL world
            Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB
            Explain the benefits from using Mongoose, and provide an example involving all CRUD operations
            Basic Web Security
            Explain basic security terms like authentication, authorization, confidentiality, integrity, SSL/TLS and provide examples of how you have used them (2-3. semester related).
            How can we "prevent" third party code used, in either our Java or NodeJS applications, from injecting dangerous code into our code base?
            Explain about Node tools like Helmet and nsp (the Node Security Project). What do they do, and how have you used them.
            Explain basic security threads like:
            ·         Cross Site Scripting (XSS)
            ·         Cross-Site Request Forgery (CSRF)
            ·        SQL Injection
            
            </div>
        )
    }
}
