$(document).ready(function () {

    $('#myBtn').click ( function() {
        let inputValue = $('#limit').val();
        let taskObj = new Task();
        taskObj.setWeightValue(inputValue);
        taskObj.generateMMLogo();
    });

    function Task() {
        this.isValidWeight = false;
        this.fontWeight = 0;
        this.star = "*";
        this.dash = "-";
        this.html = '';
        this.rows = 0;

        this.validateWeight = function (weight) {
            if (weight < 2 || weight > 10000 || weight % 2 !== 1) {
                return false;
            }
            this.isValidWeight = true;
            return true;
        };

        this.setWeightValue = function (weight)  {
            let isSuccessValidation = this.validateWeight(weight);

            if (isSuccessValidation){
                this.fontWeight = parseInt(weight);
                this.rows = this.fontWeight + 1;
            } else {
                alert ("Validation not successful.");
            }
        };

        this.generateMMLogo = function () {
            var logoDiv = "<div style='float:left; text-align:center' ></div>";
            var logoDiv2 = "<div style='float:left; text-align:center' ></div>";
            var logoDivSelect =  $(logoDiv);
            var logoDivSelect2 =  $(logoDiv2);
            $('#result').empty();
            logoDivSelect.empty();
            logoDivSelect2.empty();
            if (this.isValidWeight) {
                for (let i = 0; i < this.rows; i++) {  
                    for (let j = 0; j < this.fontWeight; j++) { 
                        if (j % 2 !== 1) {

                            for (let k = 0; k < this.fontWeight - i; k++) {
                                this.html += "<span>" + this.dash + "</span>";
                            }
                        } else {
                            for (let k = 0; k < this.fontWeight + (i*2); k++) {
                                this.html += "<span>" + this.star + "</span>";
                            }
                        }
                    }
                    this.html += "</br>"
                }

                logoDivSelect.append(this.html);
                logoDivSelect2.append(this.html);
                $('#result').append(logoDivSelect).append(logoDivSelect2);
            } else {
                alert("Try again with proper values");
            }
        }
    }
});



