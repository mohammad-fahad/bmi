const handleDisplayNone = (id1, id2, id3) => {
    document.getElementById(id1).style.display = 'none';
    document.getElementById(id2).style.display = 'none';
    document.getElementById(id3).style.display = 'none';
};

const calculate = () => {
    const weight = Number(document.getElementById('weight').value);
    const height = Number(document.getElementById('height').value);
    const male = document.getElementById('male').checked;
    const female = document.getElementById('female').checked;

    if (weight <= 0 || height <= 0) {
        alert('Please input a valid number')
    }
    else {
        if (male || female) {
            const height = Number(document.getElementById('height').value) * 0.3048;
            const count = weight / height;
            const convert = count / height;
            const bmi = parseFloat(document.getElementById('bmi').innerText);
            let result = (convert + bmi).toFixed(1);
            document.getElementById('bmi').innerText = result;

            if (result < 18.5) {
                document.getElementById('underWeight').style.display = 'block';
                handleDisplayNone('normal', 'overWeight', 'obesity');
            }
            else if (result > 18.5 && result <= 24.9) {
                document.getElementById('normal').style.display = 'block';
                handleDisplayNone('underWeight', 'overWeight', 'obesity');
            }
            else if (result >= 25 && result <= 29.9) {
                document.getElementById('overWeight').style.display = 'block';
                handleDisplayNone('underWeight', 'normal', 'obesity');
            }
            else {
                document.getElementById('obesity').style.display = 'block';
                handleDisplayNone('underWeight', 'normal', 'overWeight');
            }

            document.getElementById('weight').value = '';
            document.getElementById('height').value = '';
        }
        else {
            alert('Please select male or female');
        }
    };

};