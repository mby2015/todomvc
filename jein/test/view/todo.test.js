define([
    'model/todo',
    'view/todo'
], function(
    TodoM,
    TodoV
) {
    describe('Todo Item View를 생성 및 변경한다.', function() {
        var view1,
            view2,
            model;

        beforeEach(function() {
            model = new TodoM({
                complete: false,
                value: 'todo1'
            });
            view1 = new TodoV({
                model: model,
                id: 'view1'
            });
            view2 = new TodoV({
                model: model,
                id: 'view2'
            });
        });

        it('Todo View 가 생성됨', function() {
            expect(view1).toBeDefined();
            expect(view2).toBeDefined();
        });

        it('Model을 listen하고 있는 view는 모델이 변경되면 등록된 함수가 실행된다.', function() {
            var result;
            view1.listenTo(model, 'change:value', function(e) {
                result = e;
            });
            model.set('value', 'you have to come back home.');

            expect(result).toBe(model);
        });
    });
});