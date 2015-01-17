define(['model/todo'], function(Todo) {

    describe('TODO ITEM의 기능을 테스트 한다.', function() {

        var item1,
            item2;
        beforeEach(function() {
            item1 = new Todo({
                value: 'item1',
                complete: false
            });
            item2 = new Todo({
                value: 'item2',
                complate: false
            });
        });
        it('아이템이 생성 되었다.', function() {
            expect(item1).toBeDefined();
            expect(item2).toBeDefined();
        });

        it('상태를 변경(m.prototype.toggle)한다.', function() {

            item1.toggle();
            item2.toggle();
            item2.toggle();

            var state1 = item1.get('complete');
            var state2 = item2.get('complete');

            expect(state1).toBeTruthy();
            expect(state2).toBeFalsy();
        });

    });

});
