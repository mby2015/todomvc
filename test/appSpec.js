define(['model/model'], function(Todo) {
    describe('just checking', function() {
        var item;
        beforeEach(function() {
            item = new Todo({
                title: '',
                note: '',
                dueDate: '',
                completed: false
            });
        });

        it('make item', function() {
            expect(item).toBeDefined();
        });


        it('change property', function() {
            var obj = {
                title: '111',
                good: 'cccc'
            };
            item.changeProperty(obj);
            console.log(item)
        });
    });
});