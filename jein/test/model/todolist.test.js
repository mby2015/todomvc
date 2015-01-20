define(['model/todo', 'model/todolist'], function(Todo, TodoList) {

    describe('Todo collection test', function() {

        var item1,
            item2,
            collection;
        beforeEach(function() {
            item1 = new Todo({
                id: 1,
                value: 'item1',
                complete: false
            });
            item2 = new Todo({
                id: 2,
                value: 'item2',
                complate: false
            });
            collection = new TodoList()
        });
        it('컬렉션이 생성되었다.', function() {
            expect(collection).toBeDefined();
        });

        it('컬렉션의 아이템 추가 한다.', function() {

            collection.add(item1);
            collection.add(item2);

            expect(collection.size()).toBe(2);
        });

        it('컬렉션에 이벤트를 걸고, 모델을 추가한다', function() {
            var mv1,
                mv2;

            collection.on('add', function(model) {
                if(model.get('id') === 1) {
                    mv1 = model.get('value');
                } else {
                    mv2 = model.get('value');
                }
            });

            expect(mv1).not.toBeDefined();
            expect(mv2).not.toBeDefined();

            collection.add(item1);
            collection.add(item2);

            expect(mv1).toBe('item1');
            expect(mv2).toBe('item2');
        })

    });

});
