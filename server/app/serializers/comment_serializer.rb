class CommentSerializer
  include JSONAPI::Serializer
  attributes :message, :game_id, :game
end