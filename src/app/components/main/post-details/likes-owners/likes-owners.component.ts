import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-likes-owners',
  templateUrl: './likes-owners.component.html',
  styleUrls: ['./likes-owners.component.css']
})
export class LikesOwnersComponent {
  constructor(
    public dialogRef: MatDialogRef<LikesOwnersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ){}

  users: any[] = []
    
  ngOnInit(): void {
    console.log('data del dialogo: ',this.data);
    this.users = this.data.likes;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  irAlPerfil(user: any){
    console.log('ir al perfil de: ',user);
    this.router.navigateByUrl(`/profile/${user.id}`);
    this.dialogRef.close();
  }
}
