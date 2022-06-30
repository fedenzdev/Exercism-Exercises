/*
function createVisitor(name, age, ticketId) {
    let obj = {};
    obj.name = name,
    obj.age = age,
    obj.ticketId = ticketId
    return obj
}

const visitor = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
  };
  
function revokeTicket(visitor) {
    visitor.ticketId = null;
    return visitor
}

const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
  };
    
function ticketStatus(tickets, ticketId) {
 let status;
    if (tickets[ticketId] === undefined) {
        return status = "unknown ticket id"
    }
    if (tickets[ticketId] === null) {
        return status = "not sold"
    }
        return status = `sold to ${tickets[ticketId]}` 
}

const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
  };

function simpleTicketStatus(tickets, ticketId) {
    let simpleStatus;
    return simpleStatus = tickets[ticketId] ?? 'invalid ticket !!!'
}
*/

const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
      signed: true,
      version: '2.1',
    },
  };
  
  const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
  };


function gtcVersion(visitor) {
    return visitor.gtc?.version
}

console.log(gtcVersion(visitorNew)); // => '2.1'
console.log(gtcVersion(visitorOld)); // => undefined