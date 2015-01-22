define([
    'collection/collection',
    'model/model',
    'view/view'
], function(Todos, Todo, TodosView) {
    describe('TODO', function() {
        var items,
            itemsView;

        beforeEach(function() {
            items = new Todos();
            itemsView = new TodosView({
                collection: items
            });
        });

        it('콜렉션이 만들어 졌는지 확인한다', function() {
            expect(items).toBeDefined();
        });
        it('뷰가 만들어 졌는지 확인한다', function() {
            expect(itemsView).toBeDefined();
        });
        it('모델을 콜렉션에 추가한다', function() {
            items.add([{ title: 'supermarket', note: '- carrot', dueDate: '2015-01-29', completed: false }]);
            expect(items.size()).toEqual(1);
        });
        //it('특정 모델을 가져온다', function() {
        //
        //});
        //it('특정 모델을 수정한후 콜렉션에 저장한다', function() {
        //
        //});

    });
});