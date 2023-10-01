export default function validate(number) {
  number = number.replace(/\D/g, '');
 
     var nCheck = 0;
     var bEven = false;
 
     for (var n = number.length - 1; n >= 0; n--) {
         var nDigit = parseInt(value.charAt(n), 10);
 
         if (bEven && (nDigit *= 2) > 9) {
             nDigit -= 9;
         }
 
         nCheck += nDigit;
         bEven = !bEven;
     }
 
     return (nCheck % 10) == 0;
 }
 
 export function checkPaymentSystem(number) {
   let paymentSystems = new Map([['30', 'Diners Club'], ['36', 'Diners Club'], ['38', 'Diners Club'], ['31', 'JCB'], ['35', 'JCB'], ['31', 'American Express'], ['31', 'American Express'], ['51', 'MasterCard'], ['60', 'Discover'], ['62', 'UnioPay']]);
   if (number[0] == '2') {
     return 'МИР';
   } else if (number[0] == '4') {
     return 'VISA';
   } else {
     for (let key of paymentSystems.keys()) {
     if (number.substr(0,2) == key) {
       return paymentSystems.get(key);
     } 
   }
   }
 }