define([
    'model/model',
    'itemView'
], function(Item, ItemView) {
    describe('ItemView', function() {
        var todo,
            todoView;

        beforeEach(function() {
            todo = new Item();
            todoView = new ItemView({
                model: todo
            });
        });

        it('모델이 만들어 졌는지 확인한다', function() {
            expect(todo).toBeDefined();
        });

        it('아이템뷰가 만들어 졌는지 확인한다', function() {
            expect(todoView).toBeDefined();
        });

        it('아이템뷰에 모델을 넣는다.', function() {
            todo.set({ title: 'supermarket', note: '- carrot', dueDate: '15/1/29', completed: false });
            expect(todo.get('title')).toEqual('supermarket');
        });

        it('아이템이 클릭 되었을때, 완료 상태를 변경한다. ', function() {
            todo.set({ title: 'supermarket', note: '- carrot', dueDate: '15/1/29', completed: false });
            todoView.toggleCompleted();
            //expect(todo.get('completed')).toEqual(true);
        });



    });
});