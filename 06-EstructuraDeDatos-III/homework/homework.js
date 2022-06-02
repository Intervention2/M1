"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) return 1;
  if (this.left && this.right) return 1 + this.left.size() + this.right.size();
  if (this.left) return 1 + this.left.size();
  if (this.right) return 1 + this.right.size();
};

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else if (this.left) {
      return this.left.insert(value);
    }
  }
  if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else if (this.right) {
      return this.right.insert(value);
    }
  }
};
BinarySearchTree.prototype.contains = function (value) {
  if (this.value == value) return true;
  if (value < this.value && this.left) {
    return this.left.contains(value);
  }
  if (value > this.value && this.right) {
    return this.right.contains(value);
  }
  return false;
};
BinarySearchTree.prototype.depthFirstForEach = function (cb, orden) {
  if (orden == "in-order" || orden == null || orden == undefined) {
    if (this.left !== null) this.left.depthFirstForEach(cb, orden);
    cb(this.value);
    if (this.right !== null) this.right.depthFirstForEach(cb, orden);
  }
  if (orden == "pre-order") {
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb, orden);
    if (this.right !== null) this.right.depthFirstForEach(cb, orden);
  }
  if (orden == "post-order") {
    if (this.left !== null) this.left.depthFirstForEach(cb, orden);
    if (this.right !== null) this.right.depthFirstForEach(cb, orden);
    cb(this.value);
  }
};

/*switch(order){
  case "post-order":  
    if (this.left !== null) this.left.depthFirstForEach(cb, orden);
    if (this.right !== null) this.right.depthFirstForEach(cb, orden);
    cb(this.value);
  case "pre-order" :
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb, orden);
    if (this.right !== null) this.right.depthFirstForEach(cb, orden);
  case "in-order" :
    if (this.left !== null) this.left.depthFirstForEach(cb, orden);
    cb(this.value);
    if (this.right !== null) this.right.depthFirstForEach(cb, orden);
  default:
}
*/

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  cb(this.value);
  if (this.left) {
    array.push(this.left);
  }
  if (this.right) {
    array.push(this.right);
  }
  if (array.length) {
    array.shift().breadthFirstForEach(cb, array);
  }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
