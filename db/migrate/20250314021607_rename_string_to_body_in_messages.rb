class RenameStringToBodyInMessages < ActiveRecord::Migration[8.0]
  def change
    rename_column :messages, :string, :body
  end
end
