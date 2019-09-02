
const seminar = (req, res, next) => {
  const { name, phone, email, title, company, department, interestField, interestProduct, date} = req.body

  const { address, seminarTitle } = req.query

  var transporter = mailer.createTransport(); //모듈 호출해주셈

  transporter.sendMail({
     from: email,
     to: `${address}@insec.co.kr`,
     subject: `[ ${seminarTitle}] ${company}사 ${name} 님의 세미나 등록 요청 입니다`,
     html: '<p>이름 : '+name+'</p>'+
        '<p>회사명 : '+company+'</p>'+
        '<p>이메일 : '+email+'</p>'+
        '<p>연락처 : '+phone+'</p>'+
        '<p>부서 : '+department+'</p>'+
        '<p>직함 : '+title+'</p>'+
        '<p>관심분야 : '+interestField+'</p>'+
        '<p>관심제품 : '+interestProduct+'</p>'+
        '<p>신청날짜 : '+date+'</p>'
  },function(err,msg){
     if(!err){
        res.send("<script type='text/javascript'>alert('세미나 신청이 완료되었습니다.'); window.location.replace('/');</script>");
     }else{
        res.send("<script type='text/javascript'>alert('알 수 없는 이유로 전송에 실패했습니다. 다시 시도해주세요.'); window.location.replace('/');</script>");
     }
  });
}

module.exports = { seminar }