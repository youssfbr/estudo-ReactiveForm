import { Produto } from './../shared/produto';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  title: string;
  formProduto: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.title = 'Novo Produto';
    // this.produto = new Produto();
    this.createForm(new Produto());
  }

  createForm(produto: Produto) {
    this.formProduto = this.fb.group({
      nome: [produto.nome],
      descricao: [produto.descricao],
      preco: [produto.preco]
    });
  }

  onSubmit() {
    console.log(this.formProduto.value);

   // this.createForm(new Produto());
    this.formProduto.reset(new Produto());
  }
}
