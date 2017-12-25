var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainApp = function (_React$Component) {
  _inherits(MainApp, _React$Component);

  function MainApp(props) {
    _classCallCheck(this, MainApp);

    var _this = _possibleConstructorReturn(this, (MainApp.__proto__ || Object.getPrototypeOf(MainApp)).call(this, props));

    _this.openMenu = _this.openMenu.bind(_this);
    _this.addInput = _this.addInput.bind(_this);
    _this.addRecipe = _this.addRecipe.bind(_this);
    _this.changeMealInput = _this.changeMealInput.bind(_this);
    _this.changeIngredientsInput = _this.changeIngredientsInput.bind(_this);
    _this.editRecipe = _this.editRecipe.bind(_this);
    _this.editRecipeInput = _this.editRecipeInput.bind(_this);
    _this.deleteRecipe = _this.deleteRecipe.bind(_this);
    _this.state = {
      recipes: [{
        meal: "pizza",
        ingredients: "ketchup, mayo, ham, mushroom"
      }, {
        meal: "beans",
        ingredients: "bean, meat, water"
      }, {
        meal: "spaghetti",
        ingredients: "water, meat"
      }],
      isOpen: false, // state for opening menu
      isAdd: false, // state if is recipe opened or input new recipe
      isEdit: false, // state if edit recipe opened
      index: "", // index for adding recipes
      indexEdit: "", // index for editing recipes
      inputMeal: "", // <--------values from input meal
      inputIngredients: "" // <--------values from input ingredients
    };
    return _this;
  }

  _createClass(MainApp, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (localStorage.getItem('_MegaKreja_recipes') !== null) {
        this.setState({
          recipes: JSON.parse(localStorage.getItem('_MegaKreja_recipes'))
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      localStorage.setItem('_MegaKreja_recipes', JSON.stringify(this.state.recipes));
      console.log(prevState);
    }
    //   method for opening recipe

  }, {
    key: "openMenu",
    value: function openMenu(index) {
      this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen,
          index: index
        };
      });
    }
    //   method for opening input menu

  }, {
    key: "addInput",
    value: function addInput() {
      this.setState(function (prevState) {
        return {
          isAdd: true
        };
      });
    }
    //   open edit recipe menu

  }, {
    key: "editRecipe",
    value: function editRecipe(index) {
      this.setState(function (prevState) {
        return {
          isEdit: true,
          indexEdit: index,
          inputMeal: prevState.recipes[index].meal,
          inputIngredients: prevState.recipes[index].ingredients
        };
      });
    }
    //   edit recipe input and closing input

  }, {
    key: "editRecipeInput",
    value: function editRecipeInput(inputMeal, inputIngredients, index) {
      var recipes = this.state.recipes;
      recipes[index].meal = inputMeal;
      recipes[index].ingredients = inputIngredients;
      this.setState(function (prevState) {
        return {
          recipes: recipes,
          isEdit: false,
          inputMeal: "",
          inputIngredients: ""
        };
      });
    }
    //   delete recipe

  }, {
    key: "deleteRecipe",
    value: function deleteRecipe(index) {
      var recipes = this.state.recipes;
      recipes.splice(index, 1);
      this.setState(function (prevState) {
        recipes: recipes;
      });
    }
    //   method for pushing recipes in recipe array and hiding input menu

  }, {
    key: "addRecipe",
    value: function addRecipe(inputMeal, inputIngredients) {
      var recipes = this.state.recipes;
      var newRecipe = {
        meal: inputMeal,
        ingredients: inputIngredients
      };
      recipes.push(newRecipe);
      this.setState(function () {
        return {
          recipes: recipes,
          isAdd: false,
          inputMeal: "",
          inputIngredients: ""
        };
      });
    }
    //   change meal input, get value from meal input

  }, {
    key: "changeMealInput",
    value: function changeMealInput(input) {
      this.setState(function (prevState) {
        return {
          inputMeal: input
        };
      });
    }
    //   change ingredient input, get value from ingredients input

  }, {
    key: "changeIngredientsInput",
    value: function changeIngredientsInput(input) {
      this.setState(function (prevState) {
        return {
          inputIngredients: input
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "container" },
        React.createElement(Header, null),
        !this.state.isAdd && !this.state.isEdit && React.createElement(RecipeList, { list: this.state.recipes, isOpen: this.state.isOpen, openMenu: this.openMenu, addInput: this.addInput, index: this.state.index, isEdit: this.state.isEdit, editRecipe: this.editRecipe, deleteRecipe: this.deleteRecipe }),
        this.state.isAdd && React.createElement(InputRecipe, { addInput: this.addInput, addRecipe: this.addRecipe, inputMeal: this.state.inputMeal, inputIngredients: this.state.inputIngredients, changeMealInput: this.changeMealInput, changeIngredientsInput: this.changeIngredientsInput }),
        this.state.isEdit && React.createElement(EditRecipe, { editRecipe: this.editRecipe, indexEdit: this.state.indexEdit, recipes: this.state.recipes, changeMealInput: this.changeMealInput, changeIngredientsInput: this.changeIngredientsInput, inputMeal: this.state.inputMeal, inputIngredients: this.state.inputIngredients, editRecipeInput: this.editRecipeInput })
      );
    }
  }]);

  return MainApp;
}(React.Component);
// zato sto je isOpen true otvara sve recepte sutra videti sta sa tim 


var Header = function Header(props) {
  return React.createElement(
    "div",
    { id: "header" },
    React.createElement(
      "h1",
      null,
      "Recipe Box"
    )
  );
};

var RecipeList = function (_React$Component2) {
  _inherits(RecipeList, _React$Component2);

  function RecipeList() {
    _classCallCheck(this, RecipeList);

    return _possibleConstructorReturn(this, (RecipeList.__proto__ || Object.getPrototypeOf(RecipeList)).apply(this, arguments));
  }

  _createClass(RecipeList, [{
    key: "changeRadius",
    value: function changeRadius(index) {
      return {
        borderRadius: this.props.isOpen && this.props.index === index && 0
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var list = this.props.list.map(function (recipe, i) {
        return React.createElement(
          "div",
          { id: "list", style: _this3.changeRadius(i) },
          React.createElement(
            "h1",
            { onClick: function onClick() {
                return _this3.props.openMenu(i);
              } },
            recipe.meal
          ),
          _this3.props.isOpen && _this3.props.index === i && React.createElement(
            "p",
            null,
            "Ingredients: ",
            recipe.ingredients
          ),
          _this3.props.isOpen && _this3.props.index === i && React.createElement(
            "div",
            { id: "editDelete" },
            React.createElement("i", { className: "fa fa-pencil-square-o", "area-hidden": "true", onClick: function onClick() {
                return _this3.props.editRecipe(i);
              } }),
            React.createElement("i", { className: "fa fa-trash-o", "area-hidden": "true", onClick: function onClick() {
                return _this3.props.deleteRecipe(i);
              } })
          )
        );
      });
      return React.createElement(
        "div",
        { id: "recipeList" },
        list,
        React.createElement(
          "p",
          { id: "btnAdd", onClick: this.props.addInput },
          "Add new recipe"
        )
      );
    }
  }]);

  return RecipeList;
}(React.Component);

var InputRecipe = function InputRecipe(props) {
  return React.createElement(
    "div",
    { id: "inputMenu" },
    React.createElement(
      "label",
      null,
      "Meal: "
    ),
    React.createElement("input", { type: "text", id: "meal", value: props.inputMeal, onChange: function onChange(e) {
        return props.changeMealInput(e.target.value);
      } }),
    React.createElement("br", null),
    React.createElement(
      "label",
      null,
      "Ingredients: "
    ),
    React.createElement("textarea", { rows: "5", cols: "50", type: "text", id: "ingredients", value: props.inputIngredients, onChange: function onChange(e) {
        return props.changeIngredientsInput(e.target.value);
      } }),
    props.inputMeal.length > 0 && props.inputIngredients.length > 0 && React.createElement(
      "p",
      { id: "submit", onClick: function onClick() {
          return props.addRecipe(props.inputMeal, props.inputIngredients);
        } },
      "Submit"
    )
  );
};
// prepraviti sutradan ovo, razmisliti dobro kako indeks dugmeta implementirati, napraviti zasebne metode i pocetni value izjednaciti sa recipes state
var EditRecipe = function EditRecipe(props) {
  return React.createElement(
    "div",
    { id: "inputMenu" },
    React.createElement(
      "label",
      null,
      "Meal: "
    ),
    React.createElement("input", { type: "text", id: "meal", value: props.inputMeal, onChange: function onChange(e) {
        return props.changeMealInput(e.target.value);
      } }),
    React.createElement("br", null),
    React.createElement(
      "label",
      null,
      "Ingredients: "
    ),
    React.createElement("textarea", { rows: "5", cols: "50", type: "text", id: "ingredients", value: props.inputIngredients, onChange: function onChange(e) {
        return props.changeIngredientsInput(e.target.value);
      } }),
    props.inputMeal.length > 0 && props.inputIngredients.length > 0 && React.createElement(
      "p",
      { id: "submit", onClick: function onClick() {
          return props.editRecipeInput(props.inputMeal, props.inputIngredients, props.indexEdit);
        } },
      "Submit"
    )
  );
};

ReactDOM.render(React.createElement(MainApp, null), document.getElementById("app"));