var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "миття голови": "100 грн"
};


services["Розбити скло"] = "200 грн";


// Загальна вартість усіх наданих послуг
services.price = function () {
  var total = 0;
  for (var key in this) {
    if (typeof this[key] === "string") {
      var p = parseInt(this[key]);     // "80 грн" -> 80
      if (!isNaN(p)) total += p;
    }
  }
  return total + " грн";
};

// Мінімальна ціна
services.minPrice = function () {
  var min = Infinity;
  for (var key in this) {
    if (typeof this[key] === "string") {
      var p = parseInt(this[key]);
      if (!isNaN(p) && p < min) min = p;
    }
  }
  return (min === Infinity ? "0 грн" : min + " грн");
};

// Максимальна ціна
services.maxPrice = function () {
  var max = -Infinity;
  for (var key in this) {
    if (typeof this[key] === "string") {
      var p = parseInt(this[key]);
      if (!isNaN(p) && p > max) max = p;
    }
  }
  return (max === -Infinity ? "0 грн" : max + " грн");
};

// Приклади використання
console.log("Загальна вартість:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());