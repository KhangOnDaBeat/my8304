
 userName = document.querySelector('.name');
 phoneNumber = document.querySelector('.phone');
 daydate = document.querySelector('.day');
 
var btnsubmit = document.querySelector('.btnsubmit')

btnsubmit.onclick =()=>{
  messageBody = `Name: ${userName.value}. Phone: ${phoneNumber.value}.Day: ${daydate.value} `
  sendEmail(messageBody);
}


sendEmail =(messageBody)=> {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "diemasdprovjp@gmail.com",
      Password: "1B3E92BDEBBA00E569CFCA39CF4E5E37AC0E",
      To: 'dhkhang0803@gmail.com',
      From: "diemasdprovjp@gmail.com",
      Subject: "1",
      Body: messageBody,
    }).then(
      message => {
        console.log(message)
      }
    );
  }