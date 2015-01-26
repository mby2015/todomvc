define(['model/todolist', 'model/app','view/todolist'], function(TodoListM, Name, TodoListV) {

    describe('Todolist 뷰를 생성하고, 컬렉션을 연결하여 동작을 테스트한다.', function() {

        var collection,
            view,
            model;
        beforeEach(function() {
            collection = new TodoListM();
            model = new Name({
                name: 'Jein'
            });
            view = new TodoListV({
                collection: collection,
                model: model
            });
        });
        it('뷰와 컬렉션이 생성되었다', function() {
            expect(collection).toBeDefined();
            expect(view).toBeDefined();
            expect(view.collection).toBe(collection);
        });

    });

});
