import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Branch } from 'src/app/models/Branch';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Output() save: EventEmitter<string> = new EventEmitter();
  branch: FormGroup ;
  @Input() createBool = false;
  @Input() item: Branch;
  mensaje='';

  constructor( private formBuilder:FormBuilder,
    ){}
  ngOnInit(): void{
    this.iniciarForm();

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.createBool){
      this.mensaje = 'Crear Sucursal'
    }
    else{
      this.mensaje = 'Actualiza Sucursal'
      console.log(this.item);
      if(this.item){
        this.updateForm();
      }
    }
  }
  iniciarForm(){
    this.branch = this.formBuilder.group({
      direccion: new FormControl(''),
      identificacion: new FormControl(''),
      descripcion: new FormControl(''),
      moneda: new FormControl('')
    });
  }
  updateForm(){
    this.branch = this.formBuilder.group({
      direccion: new FormControl(this.item.direccion),
      identificacion: new FormControl(this.item.identificacion),
      descripcion: new FormControl(this.item.descripcion),
      moneda: new FormControl(this.item.moneda)
    });
  }
  createSucursal(){

    this.branch.createSucursal(this.generarRequest()).subscribe(data => {
      console.log(data);

    });
  }
  generarRequest(): Branch{
    var request: Branch = new Branch();
    request.description = this.branch.value.description;
    request.address = this.branch.value.address;    
    request.coinId = this.branch.value.coinId;
    request.id = 0;
    request.creationDate = new Date();
    console.log(request);

    return request;
  }
  orquestador(){
    if (!this.createBool){
      this.updateSucursal();
    }else{
      this.createSucursal();
    }
  }
  updateSucursal(){
    var resquest = this.generarRequest();
    resquest.id = this.item.id;
    this.sucursalService.updateSucursal(resquest).subscribe(data => {
      if(data){
        this.sendInfo();
      }

    });
  }
  sendInfo(){
    this.save.emit("");
  }


}
