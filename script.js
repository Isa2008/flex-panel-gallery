const panels = document.querySelectorAll('.panel');

        function toggleOpen() {
            // console.log('open');
            this.classList.toggle('open');
        }

        function toggleActive(e) {
            // console.log(e.propertyName);
            if (e.propertyName.includes('flex')) {
                // console.log('open-active');
                this.classList.toggle('open-active');
            }
        }

        panels.forEach(panel => panel.addEventListener('click', toggleOpen));
        panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));