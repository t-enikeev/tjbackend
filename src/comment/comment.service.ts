import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
  ) {}
  create(createCommentDto: CreateCommentDto) {
    return this.commentRepository.save({
      text: createCommentDto.text,
      post: { id: createCommentDto.postId },
      user: { id: createCommentDto.userId },
    });
  }

  findAll() {
    return this.commentRepository.find();
  }

  findOne(id: number) {
    return this.commentRepository.findOne(+id);
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.commentRepository.update(id, updateCommentDto);
  }

  remove(id: number) {
    return this.commentRepository.delete(id);
  }
}
