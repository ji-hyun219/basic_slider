// �̹����� ���� ���� currentItem

const SHOWING_CLASS = "showing";
const firstSlider = document.querySelector('.slider_item:first-child');


function slide() {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);  // ǥ������ �����ϱ� ���� $ ��ƽ�� ��

    if (currentSlide === null) {
        firstSlider.classList.add(SHOWING_CLASS);
        
    }
    else {
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        
        

        /* nextSibling, nextElementSibling ��� ���� ��� ������ ���� ���� �����ɴϴ�.
           nextSibling�� �����̵�, �ؽ�Ʈ�� ������ �ʰ� ������ �ִ� ���� �������� �ǰ�,
           nextElementSibling �� Element(���)�� �������� �˴ϴ�.
        */


        if (nextSlide == null) {
            firstSlider.classList.add(SHOWING_CLASS);
        }
        else {
            nextSlide.classList.add(SHOWING_CLASS);
        }
    }

}


setInterval(slide, 2000);