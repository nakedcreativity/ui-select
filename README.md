# Fork of AngularJS ui-select with option for a 'null-item'
Forked from [ui-select](https://github.com/angular-ui/ui-select)

* Allows new items to be inserted at the top of the dropdown, for example, to provide links to creating a new item instead of selecting one
* or to clear the list, instead of using the clear icon
* Uses 'null-item="[text here]" to define the text to appear at the top of the dropdown list

### Example

`
<ui-select ng-model="person.selected" theme="bootstrap" null-item="Create a new investor" on-select="selectCallback($item, $model)">
	<ui-select-match placeholder="Select or search a person in the list...">{{$select.selected.name}}</ui-select-match>
	<ui-select-choices repeat="item in people | filter: $select.search">
		<div ng-bind-html="item.name | highlight: $select.search"></div>
	  	<small ng-bind-html="item.email | highlight: $select.search"></small>
	</ui-select-choices>
</ui-select>
`
In this example, selectCallback is called whenever a new item is selected, it will pass `undefined` if the null item link was used.

### To-do
* Write tests
* Write documentation
* Write templates for the other themes, currently available only in Bootstrap theme

### Meteor
Originally written to support a Meteor project. Packaged and available on Atmosphere as xxxxx 