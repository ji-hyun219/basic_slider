// JavaScript source code

/* 1. 
 * showing 클래스 리스트가 순서대로 추가되게 한다.  
 * 이때 이미지 개수 length 에 for 반복문 활용. 일단 이건 마지막으로 보류
 * element sibling 함수 이용
 * 2.
 * 처음에 시작할때는 -> 처음 사진에 할당되게 하기 
 * 순서대로 추가
 * 마지막에 끝날 때는 다시 첫번째 사진에 부여해야 되겠다.
 * */


// 이미지를 담을 변수 currentItem

const SHOWING_CLASS = "showing";
const firstSlider = document.querySelector('.slider_item:first-child');
const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);  // 표현식을 삽입하기 위해 $ 백틱을 씀


function slide() {
    
    if (currentSlide === null) {
        firstSlider.classList.add(SHOWING_CLASS);
    }
    else {
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;

        /* nextSibling, nextElementSibling 모두 같은 노드 레벨의 다음 값을 가져옵니다.
           nextSibling은 공백이든, 텍스트든 가리지 않고 다음에 있는 것을 가져오게 되고,
           nextElementSibling 은 Element(요소)만 가져오게 됩니다.
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