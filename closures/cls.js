function z() {
    let val = 1;
    function x() {
        let data = "aryan";
        function y() {
            console.log(data + " " + val);    
        }
        y();
    }
    x();
}
z();
