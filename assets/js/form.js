
  
    $(document).ready(function (){
        $('.submit').click(function (event){
  
          var name = $("#name").val();
          var email = $("#email").val();
          var subject = $("#subject").val();
          var message = $("#message").val();
  
          var statusn = $('.statusn')
          var statuse = $('.statuse')
          var statuss = $('.statuss')
          var statusm = $('.statusm')
           
          statusn.empty()
          statuse.empty()
          statuss.empty()
          statusm.empty()
         
          if(name.length > 4){
            statusn.append('<h6>Name is valid</h6>')
            $("h6").css("color", "#007bff");
          }else{
            event.preventDefault();
            statusn.append('<h6> Please enter a valid name</h6>')
            $("h6").css("color", "#dc3545");
          }
  
          if(email.length > 5 && email.includes('@') && email.includes('.')){
            statuse.append('<h6>Email is valid</h6>')
            $("h6").css("color", "#007bff");
          }else{
            event.preventDefault();
            statuse.append('<h6>Please enter a valid email</h6>')
            $("h6").css("color", "#dc3545");
          }
  
          if(subject.length >= 2){
            statuss.append('<h6>Subject is valid</h6>')
            $("h6").css("color", "#007bff");
          }else{
            event.preventDefault();
            statuss.append('<h6>Please enter a valid subject</h6>')
            $("h6").css("color", "#dc3545");
          }
  
          if(message.length >= 10){
            statusm.append('<h6>Message is valid</h6>')
            $("h6").css("color", "#007bff");
          }else{
            event.preventDefault();
            statusm.append('<h6>Please enter a valid message</h6>')
            $("h6").css("color", "#dc3545");
          }
        })
      })