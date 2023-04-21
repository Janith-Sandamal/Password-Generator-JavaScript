        // Generate Password
        const passwordBox = document.getElementById('password');
        const lenght = 12;

        const generatePassword = () => {
            let password = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
            for (let i = 0; i < lenght; i++) {
                password += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            passwordBox.value = password;

        }

        document.querySelector('button').addEventListener('click', generatePassword);

        // Copy to clipboard

        const copy = document.querySelector('img');
        copy.addEventListener('click', () => {
            passwordBox.select();
            document.execCommand('copy');
            alert('Password copied to clipboard');
        })