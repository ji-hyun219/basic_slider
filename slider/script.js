// JavaScript source code

/* 1. 
 * showing Ŭ���� ����Ʈ�� ������� �߰��ǰ� �Ѵ�.  
 * �̶� �̹��� ���� length �� for �ݺ��� Ȱ��. �ϴ� �̰� ���������� ����
 * element sibling �Լ� �̿�
 * 2.
 * ó���� �����Ҷ��� -> ó�� ������ �Ҵ�ǰ� �ϱ� 
 * ������� �߰�
 * �������� ���� ���� �ٽ� ù��° ������ �ο��ؾ� �ǰڴ�.
 * */


// �̹����� ���� ���� currentItem

const SHOWING_CLASS = "showing";
const firstSlider = document.querySelector('.slider_item:first-child');
const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);  // ǥ������ �����ϱ� ���� $ ��ƽ�� ��


function slide() {
    
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